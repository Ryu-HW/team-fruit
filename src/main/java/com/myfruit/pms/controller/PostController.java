package com.myfruit.pms.controller;

import com.myfruit.pms.DTO.PageDto;
import com.myfruit.pms.DTO.Post;
import com.myfruit.pms.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class PostController {

    @Autowired
    PostService postService;

    @GetMapping("/posting")
    public String makePost(){
        return "post/createPost";
    }

    @PostMapping("/post")
    public String createPost(@ModelAttribute Post post) {
        postService.createPost(post);
        return "/post/show";
    }

    @GetMapping("/post/show")
    public String showPosts(@RequestParam(name="page",defaultValue = "1")int page,
                            @RequestParam(name="size", defaultValue = "3")int size){
        PageDto pageDto = postService.getPostByPage(page,size);
        return "/post/show";
    }

    @GetMapping("/edit/{id}")
    public String showPost(@PathVariable("id") int id,Model model){
        try {
            Post getPost = postService.findPostById(id);
            model.addAttribute("posts", getPost);
            return "/post/post";
        }catch (IllegalStateException e){
            return "common/error/404";
        }
    }

    @PostMapping("/edit/post")
    public String editPost(@ModelAttribute Post post,Model model){
        postService.updatePost(post);
        return "redirect:/post/show/1";
    }

    @GetMapping("/del/post/{id}")
    @ResponseBody
    public String deletePost(@PathVariable int id){
        postService.deletePost(id);
        return "redirect:/post/show/1";
    }

    @GetMapping("/post/list")
    @ResponseBody
    public PageDto getPostList(@RequestParam(name="page",defaultValue = "1")int page,
                               @RequestParam(name="size", defaultValue = "3")int size){

        return postService.getPostByPage(page,size);
    }
}
