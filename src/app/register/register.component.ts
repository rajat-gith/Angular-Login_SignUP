import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formGroup1:FormGroup
  constructor(private authService:AuthServiceService) { }

  ngOnInit(): void {
    this.initForm()
  }
  initForm(){
    this.formGroup1 = new FormGroup({
      name:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required])
    })
  }
  SignUp(){
    if(this.formGroup1.valid){
      this.authService.signup(this.formGroup1.value).subscribe(result=>{
        if(result.username!=""){
          console.log(result)
          alert(result.name+" account has been created")
        }else{
          alert("Some Error Occured")
          console.log("Error Occured")
        }
      })
    }
  }
}
