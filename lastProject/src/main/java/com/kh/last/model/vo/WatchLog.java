package com.kh.last.model.vo;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Entity
@Data
@IdClass(WatchLogId.class)
public class WatchLog {

   @Id
   @ManyToOne
   @JoinColumn(name ="profile_no", nullable = false)
   private Profile profile;
   
   @Id
   @ManyToOne
   @JoinColumn(name ="movie_id", nullable = false)
   private Movie movie;
   
   public WatchLog() {
      
   }
   public WatchLog(Profile profile, Movie movie) {
      this.profile = profile;
      this.movie = movie;
   }
   
}

