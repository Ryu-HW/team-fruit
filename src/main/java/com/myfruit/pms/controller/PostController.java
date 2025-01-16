package com.myfruit.pms.controller;

import com.myfruit.pms.DTO.Post;
import com.myfruit.pms.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

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
    public String listUpPosts(Model model){
        List<Post> posts = postService.findAllPosts();
        model.addAttribute("posts",posts);
        return "post/list";
    }
}
