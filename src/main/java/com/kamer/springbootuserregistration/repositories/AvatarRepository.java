package com.kamer.springbootuserregistration.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.kamer.springbootuserregistration.entity.Avatar;

public interface AvatarRepository extends CrudRepository<Avatar, Long> {
	
	List<Avatar> findByName(String name);

    Optional<Avatar> findById(Long id);
    

}
