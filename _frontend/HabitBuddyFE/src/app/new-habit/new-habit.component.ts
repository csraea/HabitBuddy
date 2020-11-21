import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../_services/user.service';


const API_URL = 'http://localhost:8080/api/test/';


@Component({
  selector: 'app-new-habit',
  templateUrl: './new-habit.component.html',
  styleUrls: ['./new-habit.component.css']
})
export class NewHabitComponent implements OnInit {

  constructor(private tokenStorageService: TokenStorageService,private userService: UserService) { }
  isLoggedIn = false;
  form: any = {};
  isSuccessful = false;
  errorMessage = '';


  ngOnInit(): void {

    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();

      let userHabits = this.userService.getUserHabits(user.id);

      let allHabits

      //allHabits-userHabits
    }
  }


  onSubmit(): void {
    
    
  }
  
}
