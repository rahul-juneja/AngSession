import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  isLogin = false

  constructor(private route: Router) {
    localStorage.setItem('isCart', 'false')
   }

  ngOnInit(): void {
    
  }

}
