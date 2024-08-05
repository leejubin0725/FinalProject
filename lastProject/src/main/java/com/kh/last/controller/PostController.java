package com.kh.last.controller;

import com.kh.last.model.vo.Post;
import com.kh.last.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PostController {

    @Autowired
    private PostService postService;

    @GetMapping("/posts/{id}")
    public Post getPostById(@PathVariable Long id) {
        // 여기서 클릭 이벤트에 해당하는 로직을 처리
        return postService.incrementViewCount(id);
    }
}