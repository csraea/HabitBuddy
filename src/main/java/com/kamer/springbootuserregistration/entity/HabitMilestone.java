package com.kamer.springbootuserregistration.entity;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="habit_milestone")
@IdClass(HabitMilestone.class)
public class HabitMilestone implements Serializable{
	
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Id
	private Long id;
	@Id
	@ManyToOne(targetEntity = Habit.class, fetch = FetchType.EAGER)
	@JoinColumn(nullable = false, name = "habit_id")
	private Habit habit;
	
	@Column(name="milestone_name")
	private String milestoneName;
	
	HabitMilestone(Habit habit) {
		this.habit = habit;
		this.milestoneName = "name";
		this.score = 25;
	}
	public Long getMilestoneId() {
		return this.id;
	}
	public Long getHabitId() {
		return this.id;
	}
	private int score;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Habit getHabit() {
		return habit;
	}
	public void setHabit(Habit habit) {
		this.habit = habit;
	}
	public String getMilestoneName() {
		return milestoneName;
	}
	public void setMilestoneName(String milestoneName) {
		this.milestoneName = milestoneName;
	}
	public int getScore() {
		return score;
	}
	public void setScore(int score) {
		this.score = score;
	}

	
	
	

}
