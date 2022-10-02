import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignUp } from '../datatype';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
 showLogin = false;
  constructor(private seller : SellerService, private router : Router) { }

  ngOnInit(): void {
  }
  signUp(data :SignUp){
  console.log(data);
  this.seller.userSignUp(data);
  
  }
  openToLogin(){
 this.showLogin = true;
  }
  opentoSignup(){
    this.showLogin = false;
  }

}
