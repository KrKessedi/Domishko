package com.example.librarysystembackend.wrapper.request;

import lombok.Data;
import lombok.NonNull;

@Data
public class RequestResetPassword {
    @NonNull
    private String newPassword;
    @NonNull
    private String confirmedPassword;
}
