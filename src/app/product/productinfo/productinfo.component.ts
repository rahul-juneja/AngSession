import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
import { ApiService } from 'src/app/users/api.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.scss']
})
export class ProductInfoComponent implements OnInit {

  data: any = [];
  size:any;
  prodId = localStorage.getItem('prodId')

  constructor(private formBuilder: FormBuilder, private productServ: ProductService, private cartServ: CartService,
      private router: Router
    ) { }

  ngOnInit(): void {
    this.productServ.getProduct("men/" + this.prodId).subscribe((data: any) => {
      this.data = data.products[0]
      console.log(this.data)
    })
  }
  sizeClick(val:String){
    console.log(val)
    this.size = val
  }
  addToCart(product: any) {
    debugger
    this.data = {
      userId: localStorage.getItem('userId'),
      productId: localStorage.getItem('prodId'),
      size: this.size
    }
    this.cartServ.addtoCart("add",this.data).subscribe(res=>{
      console.log(res)
      localStorage.setItem('isCart', "true")
      this.router.navigateByUrl('cart')
    })
    console.log(product)

  }
}
