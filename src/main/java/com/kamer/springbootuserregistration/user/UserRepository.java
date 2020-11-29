package com.kamer.springbootuserregistration.user;

import com.kamer.springbootuserregistration.entity.User;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Created on November, 2020
 *
 * @author csraea
 */
@Repository
interface UserRepository extends CrudRepository<User, Long> {

	Optional<User> findByEmail(String email);
	Optional<User> findById(Long id);
	//boolean existsById(String email);
	@Modifying
	@Transactional
	@Query(value="UPDATE users u SET u.buddy_id = :buddyId WHERE u.id = :userId",nativeQuery=true)
	void updateBuddy(@Param("userId") Long userId, @Param("buddyId") Optional<Long> buddyId);
	
	@Query(value="SELECT u.id from users u WHERE u.id != :userId limit 1",nativeQuery=true)
	Optional<Long> findBuddy(@Param("userId") Long userId);
	
	@Modifying
	@Transactional
	@Query(value="UPDATE users u SET u.scores = :tmpScore + u.scores  WHERE u.id = :userId",nativeQuery=true)
	void updateScore(@Param("userId") Long userId, @Param("tmpScore") Integer tmpScore);

}
