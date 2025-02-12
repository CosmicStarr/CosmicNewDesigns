import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/models/User';
import { AccountService } from 'src/app/services/account.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup
  returnUrl:string
  constructor(private accountService:AccountService,private route:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    $(function(){
      var btnInfo = $(".btn-form").click({
        user:this.loginForm?.get('email').value
      },function(event){
        alertUser(event.data)
        return btnInfo
      })
      function alertUser(userName){
        var alertedUser = userName.data
        alert("Welcome to SunStarrs "+ alertedUser +"!")
      }
    })

    

    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl 
    this.createForm()
    this.setCurrentUser()
  }

  createForm(){
    this.loginForm = new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',Validators.required)
    })
  }
  setCurrentUser(){
    const user: IUser = JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurrentUser(user);
  }

  onSubmit(){
    this.accountService.login(this.loginForm.value).subscribe(()=>{
      //routing logic here
      this.route.navigateByUrl(this.returnUrl)
      console.log(this.loginForm.get('email').value)
      console.log('user is login')
    },error => {
     console.log(error)
    });
  }

}
