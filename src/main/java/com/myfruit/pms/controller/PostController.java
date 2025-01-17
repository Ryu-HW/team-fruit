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
    @ResponseBody
    public void createPost(@RequestBody Post post) {
        postService.createPost(post);
    }

    @GetMapping("/post/list")
    @ResponseBody
    public List<Post> listUpPosts(){
        List<Post> posts = postService.findAllPosts();
        return posts;
    }

    @GetMapping("/post/show")
    public String showPosts(){
        return "/post/show";
    }

    @GetMapping("/edit/{id}")
    public String showPost(@PathVariable("id") int id){
        if(postService.findPostById(id) != null) {
            return "post/post";
        }else {
            return "";
        }
    }

    @GetMapping("/get/{id}")
    @ResponseBody
    public Post getPost(@PathVariable("id") int id){
        return postService.findPostById(id);
    }

    @PostMapping("/edit/post")
    @ResponseBody
    public void editPost(@RequestBody Post post){
        postService.updatePost(post);
    }

    @GetMapping("/del/post/{id}")
    @ResponseBody
    public void deletePost(@PathVariable int id){
        postService.deletePost(id);
    }


}
