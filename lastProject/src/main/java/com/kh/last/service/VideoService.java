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

    @Autowired
    private VideoRepository videoRepository;

    @Value("${aws.s3.bucketName}")
    private String awsS3BucketName;

    public Video uploadVideo(MultipartFile file, String title, String description) throws IOException {
        String key = file.getOriginalFilename();

        // 객체 업로드
        amazonS3.putObject(new PutObjectRequest(awsS3BucketName, key, file.getInputStream(), null));

        String url = amazonS3.getUrl(awsS3BucketName, key).toString();

        Video video = new Video();
        video.setTitle(title);
        video.setDescription(description);
        video.setUrl(url);

        return videoRepository.save(video);
    }
}
