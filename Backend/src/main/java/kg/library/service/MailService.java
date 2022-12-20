package kg.library.service;

public interface MailService {
    public void sendMessage(String toEmail, String subject, String text);
}
