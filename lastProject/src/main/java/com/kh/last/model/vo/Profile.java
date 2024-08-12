package com.kh.last.model.vo;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Profile {

    @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "profile_seq_generator")
//    @SequenceGenerator(name = "profile_seq_generator", sequenceName = "profile_seq", allocationSize = 1)
    private Long profileNo;

    @ManyToOne
    @JoinColumn(name = "user_no", nullable = false)
    private USERS userNo;

    @Column(name = "profile_img",nullable = false)
    private String profileImg;

    @Column(name = "profile_name", nullable = false)
    private String profileName;
}