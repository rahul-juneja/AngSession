import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-kidgirl',
  templateUrl: './kidgirl.component.html',
  styleUrls: ['./kidgirl.component.scss']
})
export class KidgirlComponent implements OnInit {
product:any
  constructor(private productserv:ProductService, private router: Router) { }

  ngOnInit(): void {
    localStorage.setItem('isCart', 'false')
    this.productserv.getProduct('category/kids').subscribe((data:any)=>{
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
