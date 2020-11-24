package com.kamer.springbootuserregistration.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity(name = "UsersHabits")
@IdClass(value = UserHabit.class)
public class UserHabit implements Serializable{
	@ManyToOne
	@JoinColumn(nullable = false, name = "id_user")
	@Id
	private User user;
	
	@Id
    @ManyToOne
    @JoinColumn(name = "id_habit")
	private Habit habit;
	
	@Column(name = "count_milestones")
	private int counter;
	
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Habit getHabit() {
		return habit;
	}

	public void setHabit(Habit habit) {
		this.habit = habit;
	}

	public int getCounter() {
		return counter;
	}

	public void setCounter(int counter) {
		this.counter = counter;
	}
	public UserHabit(User user, Habit habit) {
		this.user=user;
		this.habit=habit;
		this.counter=0;
	}
	public UserHabit() {
		
	}


}
