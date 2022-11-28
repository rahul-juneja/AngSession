import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = "http://localhost:5000/api/login"
  loginStats = Boolean(localStorage.getItem('userId')) || false
  
  constructor(private http:HttpClient) { }
  login(data:any){
    return this.http.post(this.url,data)
  }
  isAuthenticated(){
    return this.loginStats
  }
}
