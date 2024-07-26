package com.kh.last.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.kh.last.model.vo.Video;
import com.kh.last.repository.VideoRepository;
import com.kh.last.service.VideoService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/videos")
public class VideoController {

    private final VideoService videoService;

    private final VideoRepository videoRepository;

    @PostMapping("/upload")
    public Video uploadVideo(@RequestParam("file") MultipartFile file,
                             @RequestParam("title") String title,
                             @RequestParam("description") String description) throws IOException {
        return videoService.uploadVideo(file, title, description);
    }

    @GetMapping
    public List<Video> getAllVideos() {
        return videoRepository.findAll();
    }
}
