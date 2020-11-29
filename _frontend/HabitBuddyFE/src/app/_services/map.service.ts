import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Map } from '../models/map.model';


const baseUrl = 'http://localhost:8080/api/v1/maps';



@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient) { }


  getAll(): Observable<any> {
    return this.http.get<Map[]>(baseUrl);
  }

  get(id): Observable<any> {
    return this.http.get<Map>(`${baseUrl}/${id}`);
  }

  create(data: Map): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id, data: Map): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
