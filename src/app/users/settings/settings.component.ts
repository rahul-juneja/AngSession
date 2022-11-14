import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-movie',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  update!:FormGroup
  title='validation';
  submitted:boolean= false;


  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.update=this.formBuilder.group({
      num:['',[Validators.required, Validators.pattern("[0-9]{10}")]],
      name:['',[Validators.required, Validators.pattern('[a-z A-Z]+')]],
      email:['',[Validators.required,Validators.email]],
      gender:['',[Validators.required,]],
      date:['',[Validators.required,]],
      location:['',[Validators.required,]],
      
  })
  // console.log(this.f['name'].touched)


}
get f(){
  return this.update.controls
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
}
