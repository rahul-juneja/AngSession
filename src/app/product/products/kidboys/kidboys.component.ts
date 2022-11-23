import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-kidboys',
  templateUrl: './kidboys.component.html',
  styleUrls: ['./kidboys.component.scss']
})
export class KidboysComponent implements OnInit {
product:any
  constructor(private productserv:ProductService) { }

  ngOnInit(): void {
    this.productserv.getProduct('kids').subscribe((data:any)=>{
      console.log(data)
      this.product = data
    })

    }
  }


