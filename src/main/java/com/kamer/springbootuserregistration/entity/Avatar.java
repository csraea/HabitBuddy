package com.kamer.springbootuserregistration.entity;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;



@Entity
@Table(name="Avatar")
public class Avatar {
	
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Id
    private Long id;
	private String name;
	private Long price;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Long getPrice() {
		return price;
	}
	public void setPrice(Long price) {
		this.price = price;
	}
	
	public Avatar() {
		
	}
	public Avatar(String name, Long price) {
		this.name=name;
		this.price=price;
			
		}
	
	@ManyToMany(mappedBy = "avatars")
    private Set<User> users;
	

}
