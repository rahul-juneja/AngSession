import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginValue!: FormGroup
  submitted: any;
  user: any;
  data: any;
  islogged: boolean = false;
  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.loginValue = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')]],
      password: ['', [Validators.required, Validators.pattern('((?=.*[a-z])(?=.*[A-Z])(?=.*[$@$!%*?&]).{8,30})')]]
    })
  }

  get f() {
    return this.loginValue.controls
  }


  login() {
    if (this.loginValue.valid) {
      this.data = {
        email: this.f['email'].value,
        pass: this.f['password'].value,
      }
      this.api.login(this.data).subscribe((data:any) => {
        console.log(data.id)
        // alert("SuccessFully Logged In!!!")
        localStorage.setItem('email', this.f['email'].value)
        localStorage.setItem('userId', data.id)
        // this.router.navigateByUrl("/home")
        this.router.navigate([''])
        window.location.replace('home')
      })
    }
    else {
      this.submitted = true
    }
  }
  signup() {
    this.router.navigateByUrl("/user/register")

  }
}
