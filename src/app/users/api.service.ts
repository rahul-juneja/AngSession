import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = "http://localhost:3000/users"

  constructor(private http:HttpClient) { }
  postMethod(data:any){
    return this.http.post<any>(this.url,data)
  }
  
  getMothode(){
    return this.http.get<any>(this.url)
  }
}
