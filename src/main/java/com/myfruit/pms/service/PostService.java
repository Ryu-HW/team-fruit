package com.myfruit.pms.service;

import com.myfruit.pms.DTO.Post;
import com.myfruit.pms.mapper.PostMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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
        return postMapper.selectPostById(id).orElseThrow(
            () -> new IllegalStateException("파일을 찾을 수 없습니다.")
        );
    }

    public void updatePost(Post post){
        postMapper.updatePost(post);
    }

    public void deletePost(int id){
        postMapper.deletePost(id);
    }

    public List<Post> getPostByPage(int limit, int offset){
        return postMapper.selectPostByPage(limit,offset);
    }
}
