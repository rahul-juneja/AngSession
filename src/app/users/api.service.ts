import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = "http://localhost:5000/api/login"
  cartStats = new BehaviorSubject({cart:false})
  loginStats = Boolean(localStorage.getItem('userId')) || false
  
  constructor(private http:HttpClient) {
    console.log(this.cartStats)

  }
  login(data:any){
    return this.http.post(this.url,data)
  }
  isAuthenticated(){
    return this.loginStats
  }
}
