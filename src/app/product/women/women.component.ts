import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.scss']
})
export class WomenComponent implements OnInit {
<<<<<<< HEAD
  isLogin =false
  data:any
    constructor(private products: ProductsService) { }
  
    ngOnInit(): void {
      this.products.showFunc().subscribe((data:any)=>{
        data.map((val:any)=>{
          this.data = data
          console.log(data)
          
          
        })
      })
      console.log(this.data)
    }
    
=======
 isLogin = false
 data:any
  constructor(private products: ProductsService) { }

  ngOnInit(): void {
    this.products.showFunc().subscribe((data:any)=>{
      data.map((val:any)=>{
        this.data = data
        console.log(data)
        
        
      })
    })
    console.log(this.data)
>>>>>>> 7a79b53162cd879d30abef762f72dd2f99ab8d9f
  }
  