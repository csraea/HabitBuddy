package com.kamer.springbootuserregistration.user;

import org.springframework.data.repository.CrudRepository;


import com.kamer.springbootuserregistration.entity.Habit;

import java.util.Optional;

public interface HabitRepository extends CrudRepository<Habit, Long> {

	Optional<Habit> findById(Long id);
}
