package com.myfruit.pms.DTO;

import java.util.List;

public class PageDto {
    private int pageNum;
    private List<Post> posts;
    private int currentPage;

    public PageDto(int pageNum, List<Post> posts) {
        this.pageNum = pageNum;
        this.posts = posts;
    }

    public PageDto(int pageNum, List<Post> posts,int currentPage) {
        this.pageNum = pageNum;
        this.posts = posts;
        this.currentPage = currentPage;
    }


    public int getPageNum() {
        return pageNum;
    }

    public List<Post> getPosts() {
        return posts;
    }

    public int getCurrentPage() {
        return currentPage;
    }

    public void setPageNum(int pageNum) {
        this.pageNum = pageNum;
    }

    public void setPosts(List<Post> posts) {
        this.posts = posts;
    }

    public void setCurrentPage(int currentPage) {
        this.currentPage = currentPage;
    }
}
