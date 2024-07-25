package com.kh.last.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;

import io.github.cdimascio.dotenv.Dotenv;

@Configuration  // Add this annotation to mark the class as a configuration class
public class AppConfig {

    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
    
    @Bean
    public AmazonS3 amazonS3() {
        Dotenv dotenv = Dotenv.load();
        BasicAWSCredentials awsCreds = new BasicAWSCredentials(dotenv.get("AWS_ACCESS_KEY_ID"), dotenv.get("AWS_SECRET_ACCESS_KEY"));
        
        return AmazonS3ClientBuilder.standard()
                .withRegion(Regions.fromName(dotenv.get("AWS_REGION")))
                .withCredentials(new AWSStaticCredentialsProvider(awsCreds))
                .build();
}
}
