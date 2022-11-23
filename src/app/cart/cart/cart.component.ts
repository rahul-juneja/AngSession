import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  userId = localStorage.getItem('userId')
  allInfo:any
  cartForm!:FormGroup
  data:any = []
  size: any;
  constructor(private formBuilder: FormBuilder,private cartServ: CartService) { }

  ngOnInit(): void {
    this.cartForm = this.formBuilder.group({
      size: ['', [Validators.required]],
      qty: ['', [Validators.required]],
      totalPrice: ['', [Validators.required]]
    })
    console.log(typeof this.userId)
    this.cartServ.showCart(this.userId).subscribe((data:any)=>{
      data.result.map((val:any)=>{
        // console.log(val)
        this.allInfo = val
        this.size = val.size
        // this.f['size'].setValue(this.allInfo.size)
        // console.log(this.allInfo.size)

        // console.log(val.product_details)
        this.data.push(val.product_details[0])
        console.log(this.data)
      })
    })
  }
  get f(){
    return this.cartForm.controls
  }
  headerShow(){
    localStorage.setItem('isCart', 'false')
  }
   

}
