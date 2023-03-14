import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder, FormGroup, ValidatorFn, AbstractControl } from '@angular/forms';

function confirmPassword(p1:string,p2:string):ValidatorFn {
  return (c:AbstractControl):{[key:string]:boolean}|null=>{
    return p1===p2? null:{'pass':false}

  }
}


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit{


  SignForm!:FormGroup
  ngOnInit(): void {
    this.prepareForm()
}
  constructor(private fb:FormBuilder){
  }

  prepareForm(){
    this.SignForm=this.fb.group({
      username:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      passwordgroup:this.fb.group({
        confirpassword:['',Validators.required,Validators.maxLength(6)],
        password:['',[Validators.required,Validators.maxLength(6)]]
      },{validator:confirmPassword}
      )

    })
  
  }

  save(){
    console.log(this.SignForm.get('username')?.value)
    console.log(this.SignForm.get('email')?.value)
    console.log(this.SignForm.get('password')?.value)
  /* console.log( this.SignForm)
   console.log('Form is:',JSON.stringify(this.SignForm.value))*/
  }


}
