import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngSession';
  constructor(private route: Router, private acti:ActivatedRoute){
    this.route.config.map((url)=>{
      console.log(url.path)
    })
    acti.url.subscribe(url=>console.log(url))
  }
  ngOnit(){
  }
}
