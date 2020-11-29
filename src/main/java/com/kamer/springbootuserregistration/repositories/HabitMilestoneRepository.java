package com.kamer.springbootuserregistration.repositories;
import org.springframework.data.repository.CrudRepository;


import com.kamer.springbootuserregistration.entity.HabitMilestone;

import java.util.Optional;

public interface HabitMilestoneRepository extends CrudRepository<HabitMilestone, Long> {

	Optional<HabitMilestone> findHabitMilestoneById(Long id);
	
}
