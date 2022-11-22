import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  registerForm!: FormGroup
  submitted: any;
  user: any;
  islogged: boolean = false;
  update: any;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      
      name: ['', [Validators.required, Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')]],
      number: ['', [Validators.required, Validators.pattern('((?=.*[a-z])(?=.*[A-Z])(?=.*[$@$!%*?&]).{8,30})')]]
    })
  }

  get f() {
    return this.registerForm.controls
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
  headerShow(){
    localStorage.setItem('isCart', 'false')
  }
}
