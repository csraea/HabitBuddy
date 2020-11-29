package com.kamer.springbootuserregistration.entity;

import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import java.util.Collection;
import java.util.Collections;
import java.util.Set;

/**
 * Created on November, 2020
 *
 * @author csraea
 */

@Getter
@Setter
@Builder
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "users")
public class User implements UserDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String name;

	//private String surname;

	private String email;

	private String password;
	
	private Integer scores;

	@Builder.Default
	private UserRole userRole = UserRole.USER;

	@Builder.Default
	private Boolean locked = false;

	@Builder.Default
	private Boolean enabled = false;
	
	@OneToOne(targetEntity = User.class, fetch = FetchType.EAGER)
	@JoinColumn(nullable = false, name = "buddy_id")

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {

		final SimpleGrantedAuthority simpleGrantedAuthority = new SimpleGrantedAuthority(userRole.name());
		return Collections.singletonList(simpleGrantedAuthority);
	}

	@Override
	public String getPassword() {
		return password;
	}
	public Long getId() {
		return id;
	}

	@Override
	public String getUsername() {
		return email;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return !locked;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return enabled;
	}
	public Integer getScores() {
		return scores;
	}
	public void setScores(Integer scores) {
		this.scores = scores;
	}

	public void setEnabled(boolean b) {
		this.enabled=b;
		
	}

	public void setPassword(String encryptedPassword) {
		this.password=encryptedPassword;
		
	}

	public String getEmail() {
		// TODO Auto-generated method stub
		return this.email;
	}
/*
	public User getBuddy() {
		return buddy;
	}

	public void setBuddy(User buddy) {
		this.buddy = buddy;
	}*/
	
	@ManyToMany(cascade = CascadeType.ALL)
    @JoinTable
    private Set<Avatar> avatars;
	
	@ManyToMany(cascade = CascadeType.ALL)
    @JoinTable
    private Set<Map> maps;
}
