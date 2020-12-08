import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Habit } from '../models/habit.model';


const baseUrl = 'http://localhost:3000/api/v1/habits';



@Injectable({
  providedIn: 'root'
})
export class HabitService {

  constructor(private http: HttpClient) { }


  getAll(): any {
    return this.http.get('http://localhost:3000/habits');
    //return this.http.get<Habit[]>(baseUrl);
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
