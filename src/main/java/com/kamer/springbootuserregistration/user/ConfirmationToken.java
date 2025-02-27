package com.kamer.springbootuserregistration.user;

import com.kamer.springbootuserregistration.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.UUID;

/**
 * Created on November, 2020
 *
 * @author csraea
 */

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
class ConfirmationToken {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String confirmationToken;

	private LocalDate createdDate;

	@OneToOne(targetEntity = User.class, fetch = FetchType.EAGER)
	@JoinColumn(nullable = false, name = "user_id")
	private User user;

	ConfirmationToken(User user) {
		this.user = user;
		this.createdDate = LocalDate.now();
		this.confirmationToken = UUID.randomUUID().toString();
	}

	public User getUser() {
		// TODO Auto-generated method stub
		return this.user;
	}

	public String getConfirmationToken() {
		// TODO Auto-generated method stub
		return this.confirmationToken;
	}

	public Long getId() {
		// TODO Auto-generated method stub
		return this.id;
	}
}