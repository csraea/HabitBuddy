package com.kamer.springbootuserregistration.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="user_habit_track")
@IdClass(UserHabitTracking.class)
public class UserHabitTracking implements Serializable{
	
	@ManyToOne(targetEntity = User.class, fetch = FetchType.EAGER)
	@JoinColumn(nullable = false, name = "id_user")
	@Id
	private User user;
	@Id
	@Column(name = "id_habit")
	private Long habitId;
	@Id
	@Column(name = "id_milestone")
	private Long milestoneId;
	
	@Column(name="status")
	private boolean status;
	
	public User getUser() {
		return user;
	}
	public Long getId() {
		return user.getId();
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Long getHabitId() {
		return habitId;
	}
	public void setHabitId(Long habitId) {
		this.habitId = habitId;
	}
	public Long getMilestoneId() {
		return milestoneId;
	}
	public void setMilestoneId(Long milestoneId) {
		this.milestoneId = milestoneId;
	}
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	
	UserHabitTracking(){
		
	}
	

	

	


}
