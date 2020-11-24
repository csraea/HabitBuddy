package com.kamer.springbootuserregistration.services;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.kamer.springbootuserregistration.entity.Avatar;
import com.kamer.springbootuserregistration.repositories.AvatarRepository;

@Service
public class AvatarService {
	private AvatarRepository avatarRepository;

	Optional<Avatar> findAvatarById(Long id) {

		return avatarRepository.findById(id);
	}
}
