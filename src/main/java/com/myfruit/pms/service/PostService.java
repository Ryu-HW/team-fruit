package com.myfruit.pms.service;

import com.myfruit.pms.DTO.Post;
import com.myfruit.pms.mapper.PostMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {

    @Autowired
    PostMapper postMapper;

    public void createPost(Post post){
        postMapper.insertPost(post);
    }

    public List<Post> findAllPosts(){
        return postMapper.selectAllPosts();
    }

    public Post findPostById(int id){
        return postMapper.selectPostById(id);
    }

    public void updatePost(Post post){
        postMapper.updatePost(post);
    }
}
