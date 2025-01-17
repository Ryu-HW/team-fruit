package com.myfruit.pms.controller;

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

    @GetMapping("/post/show/{page}")
    public String showPosts(@PathVariable("page") int page, Model model){
        int limit = 3;
        int offset = (page-1)*limit;
        List<Post> pagePosts = postService.getPostByPage(limit,offset);
        int pagePostsSize = pagePosts.size();
        model.addAttribute("postSize",pagePostsSize);
        model.addAttribute("posts",pagePosts);
        model.addAttribute("pageNum",page);
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
    public String deletePost(@PathVariable int id){
        postService.deletePost(id);
        return "redirect:/post/show/1";
    }

}
