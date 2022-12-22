package com.example.librarysystembackend.service;

public interface MailService {
    public void sendMessage(String toEmail, String subject, String text);
}
