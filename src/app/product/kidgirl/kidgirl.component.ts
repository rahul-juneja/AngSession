import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-kidgirl',
  templateUrl: './kidgirl.component.html',
  styleUrls: ['./kidgirl.component.scss']
})
export class KidgirlComponent implements OnInit {
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
