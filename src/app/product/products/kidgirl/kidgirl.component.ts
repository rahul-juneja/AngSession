import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../../productservice.service';

@Component({
  selector: 'app-kidgirl',
  templateUrl: './kidgirl.component.html',
  styleUrls: ['./kidgirl.component.scss']
})
export class KidgirlComponent implements OnInit {
product:any
  constructor(private productserv:ProductserviceService) { }

  ngOnInit(): void {
    this.productserv.getProduct('kids').subscribe((data:any)=>{
      console.log(data)
      this.product = data
    })
  }

}
