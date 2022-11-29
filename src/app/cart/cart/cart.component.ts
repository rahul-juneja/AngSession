import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { urlencoded } from 'express';
import { BehaviorSubject, Observable } from 'rxjs';
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
  dataChange = new BehaviorSubject([])
  size: any;
  delData:any = []
  grandTotal:number = 0
  path:any
  
  constructor(private formBuilder: FormBuilder,private cartServ: CartService, private router: Router,
      private activatedRoute: ActivatedRoute    
    ) { }

  ngOnInit(): void {
    this.cartServ.cartHeader().next({cart:true})
    console.log(this.cartServ.cartHeader())

    localStorage.setItem('isCart', 'true')
    this.activatedRoute.url.subscribe((url)=>{
      this.path = url
    })
    console.log(this.router)
    console.log(this.path[0].path)

    this.cartForm = this.formBuilder.group({
      size: ['', [Validators.required]],
      qty: ['', [Validators.required]],
      totalPrice: ['', [Validators.required]]
    })
    console.log(typeof this.userId)
    this.cartServ.showCart(this.userId).subscribe((data:any)=>{
      data.result.map((val:any)=>{
        this.allInfo = val
        this.f['size'].setValue(this.allInfo.size)
        val.product_details[0].size = val.size.toUpperCase()
        val.product_details[0].qty = val.quantity
        this.data.push(val.product_details[0])
        this.dataChange.next(this.data)
        this.grandTotal += val.product_details[0].price * val.product_details[0].qty
        console.log(this.grandTotal)
      })
    })
    console.log(this.dataChange.value)
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
    this.delData = {
      userId: userId,
      productId: prodID,
      size: size.toLowerCase()
    }
  }
  confirm(data=this.delData){
    this.cartServ.delProduct("delete",data).subscribe((res: any)=>{
      console.log(res)
      this.dataChange.asObservable().subscribe((val)=>{
        val.map((item)=>{
          if (item['_id'] == data.productId){
            this.data.pop(item)
            this.dataChange.next(this.data)
            console.log(this.data)
          }
          console.log(item)
        })
      })
      console.log(this.data)
      console.log(this.delData)
    })
  }

}
