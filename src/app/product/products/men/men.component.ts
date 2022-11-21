import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../../productservice.service';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.scss']
})
export class MenComponent implements OnInit {
  product:any
  constructor(private productServ:ProductserviceService) { }

  ngOnInit(): void {
    this.productServ.getProduct('men').subscribe((data:any)=>{
      console.log(data)
      this.product = data
      // data.map((val:any)=>{
      //   console.log(val)
      // })
    })
  }

}
