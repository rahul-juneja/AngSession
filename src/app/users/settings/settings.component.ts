import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  updateform!:FormGroup
  submitted=false;

  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.updateform=this.formbuilder.group({
      number:['',Validators.required],
    })
  }

  onSubmit(){
    this.submitted=true;


    if(this.updateform.invalid){
      
    }
    alert("success")
  }

}
