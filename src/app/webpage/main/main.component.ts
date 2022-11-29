import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  isLogin = false

  constructor(private route: Router, private cartServ: CartService) {
  }
  
  ngOnInit(): void {
    localStorage.setItem('isCart', 'false')
    this.cartServ.cartHeader().next({cart:false})
    console.log(this.cartServ.cartHeader().value)
  }

}
