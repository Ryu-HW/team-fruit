package com.myfruit.pms.mapper;

import com.myfruit.pms.DTO.Post;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface PostMapper {

    public void insertPost(Post post);
    public List<Post> selectAllPosts();
    public Post selectPostById(int id);
    public void updatePost(Post post);
}
