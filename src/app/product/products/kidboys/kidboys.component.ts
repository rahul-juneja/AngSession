import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../../productservice.service';

@Component({
  selector: 'app-kidboys',
  templateUrl: './kidboys.component.html',
  styleUrls: ['./kidboys.component.scss']
})
export class KidboysComponent implements OnInit {
product:any
  constructor(private productserv:ProductserviceService) { }

  ngOnInit(): void {
    this.productserv.getProduct('kidboys').subscribe((data:any)=>{
      console.log(data)
      this.product = data
    })

    }
  }


