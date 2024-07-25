package com.kh.last.service;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.kh.last.model.vo.Video;
import com.kh.last.repository.VideoRepository;

@Service
public class VideoService {

    @Autowired
    private AmazonS3 amazonS3;

    @Value("${aws.s3.bucketName}")
    private String bucketName;

    @Autowired
    private VideoRepository videoRepository;

    public Video uploadVideo(MultipartFile file, String title, String description) throws IOException {
        String key = file.getOriginalFilename();

        // ACL 없이 객체 업로드
        amazonS3.putObject(new PutObjectRequest(bucketName, key, file.getInputStream(), null));

        String url = amazonS3.getUrl(bucketName, key).toString();

        Video video = new Video();
        video.setTitle(title);
        video.setDescription(description);
        video.setUrl(url);

        return videoRepository.save(video);
    }
}
