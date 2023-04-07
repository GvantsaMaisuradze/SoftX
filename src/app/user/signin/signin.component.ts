import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  "username"=new FormControl(null,[Validators.required,Validators.maxLength(5),Validators.pattern(/admin/)])
  "password"=new FormControl(null,[Validators.required,Validators.maxLength(5),Validators.pattern(/admin/)])

  showAlert=false;
  alertMsg='username or password is incorrect!'
  alertColor='danger'

  constructor(private router:Router, private auth:AuthService) { }

  
  
  ngOnInit(): void {

  }
   signInForm = new FormGroup({
      username: this.username,
      password : this.password
    })
    


  onFormSubmit(){
    this.auth.LogIn();
    this.showAlert=true;
    this.alertMsg= 'username or password is incorrect!'
    this.alertColor='danger'
    this.router.navigate(['home'])
  }
}
