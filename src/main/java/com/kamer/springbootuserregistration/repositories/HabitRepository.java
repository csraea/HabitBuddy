package com.kamer.springbootuserregistration.repositories;

import org.springframework.data.repository.CrudRepository;


import com.kamer.springbootuserregistration.entity.Habit;

import java.util.Optional;

public interface HabitRepository extends CrudRepository<Habit, Long> {

	Optional<Habit> findById(Long id);
}
