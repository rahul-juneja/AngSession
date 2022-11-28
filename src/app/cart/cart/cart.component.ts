import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
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
  grandTotal:number = 0
  constructor(private formBuilder: FormBuilder,private cartServ: CartService, private router: Router) { }

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
        // this.size = val.size
        // console.log(this.allInfo.size)
        this.f['size'].setValue(this.allInfo.size)
        // console.log(val.product_details)
        val.product_details[0].size = val.size.toUpperCase()
        val.product_details[0].qty = val.quantity
        this.data.push(val.product_details[0])
        this.grandTotal += val.product_details[0].price * val.product_details[0].qty
        console.log(this.grandTotal)
        // console.log(this.data)
      })
    })

  }
  get f(){
    return this.cartForm.controls
  }
  headerShow(){
    localStorage.setItem('isCart', 'false')
  }
  productInfo(data:any){
    console.log(data)
    localStorage.setItem('prodId', data._id)
    localStorage.setItem('isCart', 'false')
    this.router.navigate(['product',"productinfo"])
  }
  deleteProduct(prodID:any,size:any){
    console.log(prodID, size)
    const userId=localStorage.getItem("userId")
    console.log(userId)
    const data = {
      userId: userId,
      productId: prodID,
      size: size.toLowerCase()
    }
    this.cartServ.delProduct("delete",data).subscribe((res: any)=>{
      console.log(res)
      localStorage.setItem('isCart', "true")
      window.location.reload()
      this.router.navigateByUrl('/cart')
    })
    
  }
}
