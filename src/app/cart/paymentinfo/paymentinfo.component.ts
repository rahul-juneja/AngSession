import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-paymentinfo',
  templateUrl: './paymentinfo.component.html',
  styleUrls: ['./paymentinfo.component.scss']
})
export class PaymentinfoComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private cartServ:CartService) { }

  ngOnInit(): void {
    this.cartServ.cartHeader().next({cart:true})
    localStorage.setItem('isCart', 'true')
    this.activatedRoute.url.subscribe(url => console.log(url))

  }
  headerShow(){
    localStorage.setItem('isCart', 'false')
  }
}
