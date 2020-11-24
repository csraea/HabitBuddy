package com.kamer.springbootuserregistration.user;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.kamer.springbootuserregistration.entity.User;
import com.kamer.springbootuserregistration.entity.UserHabit;
import com.kamer.springbootuserregistration.entity.UserHabitTracking;

import java.util.Optional;

//userHabit repository
public interface HabitTrackRepository extends CrudRepository<UserHabit, Long> {

	Optional<UserHabit> findByUser(User user);
	
	@Query(value = "SELECT * FROM UserHabit t WHERE t.id_user = :userId and t.id_habit=:habitId",
			nativeQuery = true)
	UserHabit findRecord(@Param("userId") Long userId, 
			@Param("habitId") Long habitId);
	@Modifying
	@Transactional
	@Query(value="UPDATE UserHabit t SET t.count_milestones = t.count_milestones+ :counter WHERE t.id_user = :userId and t.id_habit=:habitId",
	nativeQuery=true)
	void updateCounter(@Param("userId") Long userId, 
			@Param("habitId") Long habitId,
			@Param("counter") int counter);
}