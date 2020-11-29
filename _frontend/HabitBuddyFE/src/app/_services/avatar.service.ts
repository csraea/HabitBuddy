import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Avatar } from '../models/avatar.model';


const baseUrl = 'http://localhost:8080/api/v1/avatars';



@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  constructor(private http: HttpClient) { }


  getAll(): Observable<Object> {
    return this.http.get<Avatar[]>(baseUrl);
  }

  get(id): Observable<Object> {
    return this.http.get<Avatar>(`${baseUrl}/${id}`);
  }

  create(data: Avatar): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id, data: Avatar): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  

  
}
