package com.kamer.springbootuserregistration.user;

import java.util.Optional;

import com.kamer.springbootuserregistration.entity.Habit;
import com.kamer.springbootuserregistration.entity.User;
import com.kamer.springbootuserregistration.entity.UserHabit;



public class HabitTrackService {
	private HabitTrackRepository habitTrackRepository;
	private UserHabit record;
	
	void createRecord(User user, Habit habit,int counter) {
		record.setUser(user);
		record.setHabit(habit);
		record.setCounter(counter);
		habitTrackRepository.save(record);			
	}

	void updateRecord(User user, Habit habit,int counter) {
		habitTrackRepository.updateCounter(user.getId(), habit.getId(), counter);		
	}
	UserHabit findUserHabitByUserHabit(User user, Habit habit) {

		return habitTrackRepository.findRecord(user.getId(), habit.getId());
	}

}
