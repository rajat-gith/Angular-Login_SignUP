import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup:FormGroup
  constructor(private authService:AuthServiceService) { }

  ngOnInit(): void {
    this.initForm()
  }
  initForm(){
    this.formGroup = new FormGroup({
      username:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required])
    })
  }
  LoginProces(){
    if(this.formGroup.valid){
      this.authService.login(this.formGroup.value).subscribe(result=>{
        if(result.username!=""){
          console.log(result)
          alert(result.name+" account logged in successfully")
        }else{
          console.log("Error Occured")
          alert("Some Error Occured")
        }
      })
    }
  }
}
