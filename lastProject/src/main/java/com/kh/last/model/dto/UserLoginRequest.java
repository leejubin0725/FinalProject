package com.kh.last.model.dto;

import lombok.Data;

@Data
public class UserLoginRequest {
    private String email;
    private String password;
}