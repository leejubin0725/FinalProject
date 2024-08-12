package com.kh.last.model.dto;

import lombok.Data;

@Data
public class PasswordResponse {
    private boolean valid;

    public PasswordResponse(boolean valid) {
        this.valid = valid;
    }
}