package com.kamer.springbootuserregistration.user;

import com.kamer.springbootuserregistration.entity.User;
import lombok.AllArgsConstructor;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Optional;

/**
 * Created on November, 2020
 *
 * @author csraea
 */
@Controller
@AllArgsConstructor
public class UserController {

	private UserService userService;

	private ConfirmationTokenService confirmationTokenService;
	
	@GetMapping("/home")
    public String homePage() {
        return "app/home/home.component";
    }


	@GetMapping("/sign-in")
	String signIn() {
		

		return "app/login/login.component";
	}
	
	@PostMapping("/sign-in")
    public String showBoard(@RequestParam(value = "email") String email, 
                            @RequestParam(value = "password") String password, ModelMap model) {
		
        if(!userService.checkIfExists(email)) {
        	System.out.println(email+" "+"TEXT");
        	model.put("errorMessage","Username or Password is incorrect !!");
        	return "app/login/login.component";
        }
        model.put("email", email);
        model.put("password", password);
        return "redirect: /board-user";
    }
	
	@GetMapping("/board-user")
	String boardUserPage() {

		return "app/board-user/board-user.component";
	}

	@GetMapping("/sign-up")
	String signUpPage(User user) {


		return "sign-up";
	}

	@PostMapping("/sign-up")
	String signUp(User user) {

		userService.signUpUser(user);
		//userService.setBuddy(user);
		user.setScores(0);
		//userService.updateScore(user,88);
		

		return "redirect:/sign-in";
	}

	@GetMapping("/sign-up/confirm")
	String confirmMail(@RequestParam("token") String token) {

		Optional<ConfirmationToken> optionalConfirmationToken = confirmationTokenService.findConfirmationTokenByToken(token);

		optionalConfirmationToken.ifPresent(userService::confirmUser);

		return "redirect:/sign-in";
	}

}
