package com.kh.last.controller;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.apache.velocity.exception.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.kh.last.model.vo.Heart;
import com.kh.last.model.vo.HeartId;
import com.kh.last.model.vo.Movie;
import com.kh.last.model.vo.Profile;
import com.kh.last.model.vo.WatchLog;
import com.kh.last.repository.HeartRepository; // 추가
import com.kh.last.repository.MovieRepository;
import com.kh.last.repository.ProfileRepository; // 추가
import com.kh.last.service.MovieService;
import com.kh.last.repository.WatchLogRepository;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/movies")
public class MovieController {
    private final MovieService movieService;
    private final MovieRepository movieRepository;
    private final HeartRepository heartRepository; // 추가
    private final ProfileRepository profileRepository; // 추가
    
    @PostMapping("/upload")
    public Movie uploadMovie(
            @RequestParam("file") MultipartFile file,
            @RequestParam("thumbnail") MultipartFile thumbnail,
            @RequestParam("title") String title,
            @RequestParam("director") String director,
            @RequestParam("cast") String cast,
            @RequestParam("releaseYear") int releaseYear,
            @RequestParam("synopsis") String synopsis,
            @RequestParam("rating") float rating,
            @RequestParam("tags") String tags) throws IOException {

        return movieService.uploadMovie(file, thumbnail, title, director, cast, releaseYear, synopsis, rating, tags);
    }

    @GetMapping
    public List<Movie> getAllMovies() {
        return movieService.findAllMovies();
    }

    @GetMapping("/{id}")
    public Movie getMovieById(@PathVariable("id") Long id) {
        Optional<Movie> movie = movieRepository.findById(id);
        if (movie.isPresent()) {
            return movie.get();
        } else {
            throw new ResourceNotFoundException("Movie not found with id " + id);
        }
    }
    
    @GetMapping("/tag")
    public List<Movie> getMoviesByTag(@RequestParam("tag") String tag) {
        return movieService.findMoviesByTag(tag);
    }

    @GetMapping("/cast")
    public List<Movie> getMoviesByCast(@RequestParam("cast") String cast) {
        return movieService.findMoviesByCast(cast);
    }
    
    @PostMapping("/toggle-like")
    public ResponseEntity<?> toggleLike(@RequestParam Long movieId, @RequestParam Long profileNo) {
        System.out.println("MovieId: " + movieId);
        System.out.println("ProfileNo: " + profileNo);

        Profile profile = profileRepository.findById(profileNo)
                .orElseThrow(() -> new ResourceNotFoundException("Profile not found with id " + profileNo));
        Movie movie = movieRepository.findById(movieId)
                .orElseThrow(() -> new ResourceNotFoundException("Movie not found with id " + movieId));

        HeartId heartId = new HeartId(profile, movie);
        Optional<Heart> heartOpt = heartRepository.findById(heartId);

        if (heartOpt.isPresent()) {
            heartRepository.delete(heartOpt.get());
        } else {
            Heart heart = new Heart(profile, movie);
            heartRepository.save(heart);
        }

        return ResponseEntity.ok().build(); // 응답을 반환합니다.
    }
    @PostMapping("/api/watchlog")
    public ResponseEntity<Void> addWatchLog(
            @RequestParam Long movieId,
            @RequestParam Long profileNo) {
        Movie movie = movieRepository.findById(movieId)
                .orElseThrow(() -> new ResourceNotFoundException("Movie not found with id " + movieId));
        Profile profile = profileRepository.findById(profileNo)
                .orElseThrow(() -> new ResourceNotFoundException("Profile not found with id " + profileNo));
        
        WatchLog watchLog = new WatchLog(profile, movie);
        watchLogRepository.save(watchLog);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/api/movies/watchlog")
    public ResponseEntity<Void> deleteWatchLog(
            @RequestParam Long movieId,
            @RequestParam Long profileNo) {
        Movie movie = movieRepository.findById(movieId)
                .orElseThrow(() -> new ResourceNotFoundException("Movie not found with id " + movieId));
        Profile profile = profileRepository.findById(profileNo)
                .orElseThrow(() -> new ResourceNotFoundException("Profile not found with id " + profileNo));
        
        watchLogRepository.deleteByProfileAndMovie(profile, movie);
        return ResponseEntity.ok().build();
    }
    
    
}
