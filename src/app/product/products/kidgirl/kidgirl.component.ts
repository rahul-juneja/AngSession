import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-kidgirl',
  templateUrl: './kidgirl.component.html',
  styleUrls: ['./kidgirl.component.scss']
})
export class KidgirlComponent implements OnInit {
product:any
  constructor(private productserv:ProductService) { }

  ngOnInit(): void {
    this.productserv.getProduct('kids').subscribe((data:any)=>{
      console.log(data)
      this.product = data
    })
  }

}
