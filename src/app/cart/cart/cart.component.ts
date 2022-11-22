import { Component, OnInit } from '@angular/core';
import { CartservService } from '../cartserv.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  constructor(private cartServ: CartservService) { }

  ngOnInit(): void {
    const products = this.cartServ.getProductData()
    console.log(products)
  }
  headerShow(){
    localStorage.setItem('isCart', 'false')
  }
   

}
