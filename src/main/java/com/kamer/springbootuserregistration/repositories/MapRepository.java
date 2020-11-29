package com.kamer.springbootuserregistration.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.kamer.springbootuserregistration.entity.Avatar;
import com.kamer.springbootuserregistration.entity.Habit;
import com.kamer.springbootuserregistration.entity.Map;

public interface MapRepository extends CrudRepository<Map, Long> {
	List<Map> findByName(String name);

    Optional<Map> findById(Long id);
    
    Optional<Map> findByHabit(Habit habit);
    

}
