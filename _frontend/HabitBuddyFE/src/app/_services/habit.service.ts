import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Habit } from '../models/habit.model';


const baseUrl = 'http://localhost:8080/api/v1/habits';



@Injectable({
  providedIn: 'root'
})
export class HabitService {

  constructor(private http: HttpClient) { }


  getAll(): Observable<any> {
    
    return this.http.get<Habit[]>(baseUrl);
  }

  get(id): Observable<any> {
    return this.http.get<Habit>(`${baseUrl}/${id}`);
  }

  create(data: Habit): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id, data: Habit): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
