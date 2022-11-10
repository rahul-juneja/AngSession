import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.scss']
})
export class MenComponent implements OnInit {
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
  
}
