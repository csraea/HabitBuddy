import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/v1/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(`${baseUrl}/`, { responseType: 'text' });
  }

  getUserBoard(id: number=1): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`, { responseType: 'text' });
  }


  getAdminBoard(): Observable<any> {
    return this.http.get(`${baseUrl}/admin`, { responseType: 'text' });
  }

  getUserHabits(id: number): Observable<any> {
    return this.http.get(`${baseUrl}/${id}/habits`, { responseType: 'json' });
  }

}