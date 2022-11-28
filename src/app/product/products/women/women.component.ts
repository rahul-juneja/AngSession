import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.scss']
})
export class WomenComponent implements OnInit {
  product:any
  constructor(private productServ:ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productServ.getProduct('category/women').subscribe((data:any)=>{
      console.log(data)
      this.product = data.products
    })
  }
  infoRed(id:any){
    console.log(id)
    localStorage.setItem("prodId",id)
    this.router.navigate(['product', 'productinfo'])
  }

}
