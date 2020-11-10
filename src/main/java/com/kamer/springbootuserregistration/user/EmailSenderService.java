package com.kamer.springbootuserregistration.user;

import lombok.AllArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

/**
 * Created on November, 2020
 *
 * @author csraea
 */

@Service
@AllArgsConstructor
public class EmailSenderService {

	private JavaMailSender javaMailSender = new JavaMailSenderImpl();

	@Async
	public void sendEmail(SimpleMailMessage email) {
		javaMailSender.send(email);
	}
}