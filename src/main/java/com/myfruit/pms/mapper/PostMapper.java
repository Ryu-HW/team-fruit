package com.myfruit.pms.mapper;

import com.myfruit.pms.DTO.Post;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Optional;

@Mapper
public interface PostMapper {

    public void insertPost(Post post);
    public List<Post> selectAllPosts();
    public Optional<Post> selectPostById(int id);
    public void updatePost(Post post);
    public void deletePost(int id);
    public List<Post> selectPostByPage(int limit,int offset);
}
