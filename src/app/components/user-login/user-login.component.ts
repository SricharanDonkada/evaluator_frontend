import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  constructor(private fb:FormBuilder, private userService:UserService) { }

  ngOnInit(): void {
  }

  hidePassword = true;

  loginForm = this.fb.group({
    email : ['',[Validators.required,Validators.email]],
    password:['',[Validators.required]],
  });

  getEmailErrorMessage() {
    if (this.loginForm.get('email').hasError('required')) {
      return 'Email is required';
    }
    return this.loginForm.get('email').hasError('email') ? 'Not a valid email' : '';
  }

  getPasswordErrorMessage() {
    if (this.loginForm.get('password').hasError('required')) {
      return 'Password is required';
    }
  }

  submitLoginFormData(){
    this.userService.login(this.loginForm.value).subscribe(
      res =>{
        console.log(res);
      },
      err =>{
        console.error(err);
      }
    );
  }

}
