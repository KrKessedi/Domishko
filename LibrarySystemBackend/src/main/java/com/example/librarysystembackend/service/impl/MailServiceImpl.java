package com.example.librarysystembackend.service.impl;

import com.example.librarysystembackend.service.MailService;
import lombok.RequiredArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MailServiceImpl implements MailService {

   JavaMailSender mailSender;

    public void sendMessage(String toEmail, String subject, String text) {

        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("60.nursultan@gmail.com");
        message.setTo(toEmail);
        message.setSubject(subject);
        message.setText(text);
        mailSender.send(message);
    }
}
