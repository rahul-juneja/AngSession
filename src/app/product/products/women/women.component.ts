import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../../productservice.service';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.scss']
})
export class WomenComponent implements OnInit {
  product:any
  constructor(private productServ:ProductserviceService) { }

  ngOnInit(): void {
    this.productServ.getProduct('women').subscribe((data:any)=>{
      console.log(data)
      this.product = data
    })
  }

}
