import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Habit } from '../models/habit.model';
import { Userhabit } from '../models/userhabit.model';


const baseUrl = 'http://localhost:8080/api/v1/userhabits';

@Injectable({
  providedIn: 'root'
})
export class UserhabitService {

  constructor(private http: HttpClient) {  }


  
    create(data: Userhabit): Observable<any> {
      return this.http.post(baseUrl, data);
    }


 
}
