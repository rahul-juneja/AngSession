import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupValue!: FormGroup
  submitted: boolean = false;
  data: any;
  confirm: boolean = false;
  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router) { }

  ngOnInit(): void {

    this.signupValue = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      email: ['', [Validators.required, Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')]],
      password: ['', [Validators.required, Validators.pattern('((?=.*[a-z])(?=.*[A-Z])(?=.*[$@$!%*?&]).{8,30})')]]
    })
  }

  get f() {
    return this.signupValue.controls
  }
  signupFormValue() {
    this.submitted = true;
    if (this.signupValue.valid) {
      this.data = {
        name: this.f['name'].value,
        email: this.f['email'].value,
        password: this.f['password'].value,
      }
      this.api.postMethod(this.data).subscribe(res => {
        alert("Account Created!!!");
        console.log(this.data);
        this.router.navigateByUrl("/login");
      })
    }
  }
}
