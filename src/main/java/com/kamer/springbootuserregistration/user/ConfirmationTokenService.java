package com.kamer.springbootuserregistration.user;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * Created on November, 2020
 *
 * @author csraea
 */
@Service
@AllArgsConstructor
class ConfirmationTokenService {

	private ConfirmationTokenRepository confirmationTokenRepository;

	void saveConfirmationToken(ConfirmationToken confirmationToken) {

		confirmationTokenRepository.save(confirmationToken);
	}

	void deleteConfirmationToken(Long id) {

		confirmationTokenRepository.deleteById(id);
	}


	Optional<ConfirmationToken> findConfirmationTokenByToken(String token) {

		return confirmationTokenRepository.findConfirmationTokenByConfirmationToken(token);
	}

}
