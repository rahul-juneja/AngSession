import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLogin:boolean = (localStorage.getItem('email')?true:false)
  isCart: boolean = false;
  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('isCart') == 'true') {
      this.isCart = true;
    }
    if (localStorage.getItem('isCart') == 'false'){
      this.isCart = false;
    }
  }
  show() {
    
  }
  cartShow() {
    localStorage.setItem('isCart', 'true');
  }
  logout(){
    localStorage.clear()
  }
}
