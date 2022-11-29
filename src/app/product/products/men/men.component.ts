import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.scss']
})
export class MenComponent implements OnInit {
  product:any
  constructor(private productServ:ProductService, private router: Router) { }

  ngOnInit(): void {
    localStorage.setItem('isCart', 'false')
    this.productServ.getProduct('category/men').subscribe((data:any)=>{
      console.log(data)
      this.product = data.products
      // data.map((val:any)=>{
      //   console.log(val)
      // })
    })
  }
  infoRed(id:any){
    console.log(id)
    localStorage.setItem("prodId",id)
    this.router.navigate(['product', 'productinfo'])
  }

}
