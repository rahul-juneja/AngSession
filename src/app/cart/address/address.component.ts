import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  registerForm!: FormGroup
  submitted: any;
  user: any;
  islogged: boolean = false;
  update: any;
  userId = localStorage.getItem('userId')
  allInfo:any
  cartForm!:FormGroup
  data:any = []
  size: any;
  grandTotal:number = 0
  constructor(private formBuilder: FormBuilder,private cartServ: CartService, private router: Router) { }

  ngOnInit(): void {
    this.cartServ.cartHeader().next({cart:true})
    localStorage.setItem('isCart', 'true')
    this.registerForm = this.formBuilder.group({
      
      name: ['', [Validators.required, Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')]],
      number: ['', [Validators.required, Validators.pattern('((?=.*[a-z])(?=.*[A-Z])(?=.*[$@$!%*?&]).{8,30})')]]
    })

    console.log(typeof this.userId)
    this.cartServ.showCart(this.userId).subscribe((data:any)=>{
      data.result.map((val:any)=>{
        // console.log(val)
        this.allInfo = val
        // this.size = val.size
        // console.log(this.allInfo.size)
        // this.f['size'].setValue(this.allInfo.size)
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
  

  get f() {
    return this.registerForm.controls
  }
  onSubmit(){
    debugger
    if(this.update.valid){
      // alert('Success!!')
      console.log(this.update.value);
    }else{
      this.submitted = true
      // alert('please fill the form properly')
      }
  }
  headerShow(){
    localStorage.setItem('isCart', 'false')
  }
}
