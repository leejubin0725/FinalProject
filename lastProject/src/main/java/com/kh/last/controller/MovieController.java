package com.kh.last.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.kh.last.model.vo.Movie;
import com.kh.last.service.MovieService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/movies")
public class MovieController {
    private final MovieService movieService;

    @PostMapping("/upload")
    public Movie uploadMovie(
        @RequestParam("file") MultipartFile file,
        @RequestParam("thumbnail") MultipartFile thumbnail,
        @RequestParam("title") String title,
        @RequestParam("director") String director,
        @RequestParam("cast") String cast,
        @RequestParam("releaseYear") int releaseYear,
        @RequestParam("synopsis") String synopsis,
        @RequestParam("tags") String tags) throws IOException {
        
        return movieService.uploadMovie(file, thumbnail, title, director, cast, releaseYear, synopsis, tags);
    }

    @GetMapping
    public List<Movie> getAllMovies() {
        return movieService.findAllMovies();
    }
}
