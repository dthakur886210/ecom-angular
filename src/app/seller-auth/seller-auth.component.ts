import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignIn, SignUp } from '../datatype';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
 showLogin = false;
 authError: string = "";
  constructor(private seller : SellerService, private router : Router) { }

  ngOnInit(): void {
  }
  signUp(data :SignUp){
  console.log(data);
  this.seller.userSignUp(data);
  
  }
  login(data : SignIn){
    this.authError = "";
this.seller.userLogin(data);
this.seller.isLoginError.subscribe((error)=>{
  if (error){
    this.authError = "Email or Password is not Correct";
  }
})
  }
  openToLogin(){
 this.showLogin = true;
  }
  opentoSignup(){
    this.showLogin = false;
  }

}
