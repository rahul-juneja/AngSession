import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url = "http://localhost:3000/men"
  constructor(private http: HttpClient) { }
  showFunc(){
    return this.http.get(this.url)
  }
}
