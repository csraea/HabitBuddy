import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../_services/user.service';
import { HabitService } from '../_services/habit.service';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { Userhabit } from '../models/userhabit.model';
import { UserhabitService } from '../_services/userhabit.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-new-habit',
  templateUrl: './new-habit.component.html',
  styleUrls: ['./new-habit.component.css']
})
export class NewHabitComponent implements OnInit {

  constructor(private tokenStorageService: TokenStorageService,
    private formBuilder: FormBuilder,  private router: Router,
    private userService: UserService,private habitService: HabitService,
    private userhabitService: UserhabitService) { }



  isLoggedIn = false;
  submitted = false;
  errorMessage = '';
  allHabits= this.habitService.getAll();
  allMilestones=[];
  form: FormGroup;
  newUserHabit: Userhabit = new Userhabit();

  
  ngOnInit(): void {

    this.isLoggedIn = !!this.tokenStorageService.getToken();
      if (this.isLoggedIn) {
        const user = this.tokenStorageService.getUser();

        let userHabits = this.userService.getUserHabits(user.id);

        //let allHabits= this.habitService.getAll();
        
        //allHabits-userHabits
        
        this.form = this.formBuilder.group({
          'currentMilestone': [null],
          //'desc': [null, Validators.required],
        });  
      }


    
  
  }

  onChange(selection) {
    console.log(selection)
    //this.allMilestones=this.allHabits[selection.id].milestones;
    this.allMilestones=this.allHabits[this.newUserHabit.habit.habitid].milestones;  
  }


  onSubmit(form: NgForm) {
    
    this.submitted = true;
    this.save(); 
}


save() {
  this.userhabitService
  .create(this.newUserHabit).subscribe(data => {
    console.log(data)
    this.newUserHabit = new Userhabit();
    this.router.navigate(['/employees']);
  }, 
  error => console.log(error));
}
  
}
