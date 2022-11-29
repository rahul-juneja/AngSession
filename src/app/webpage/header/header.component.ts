import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  email = localStorage.getItem('email')
  isCart:any
  constructor(private cartServ: CartService) {

  }
  ngOnChange(){
  }
  ngOnInit(): void {
    this.cartServ.cartHeader().subscribe((val)=>{
      this.isCart = val.cart
      console.log("Updated " + this.isCart)
      return this.isCart
    })
    
  }
  cartShow() {
    localStorage.setItem('isCart', 'true');
  }
  logout() {
    localStorage.clear()
  }
}
