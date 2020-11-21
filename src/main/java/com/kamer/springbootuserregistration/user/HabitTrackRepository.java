package com.kamer.springbootuserregistration.user;
import org.springframework.data.repository.CrudRepository;


import com.kamer.springbootuserregistration.entity.UserHabitTracking;

import java.util.Optional;

public interface HabitTrackRepository extends CrudRepository<UserHabitTracking, Long> {

	Optional<UserHabitTracking> findByUser(Long id);
}