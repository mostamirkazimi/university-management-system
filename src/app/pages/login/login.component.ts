import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

   loginObj:any = {
    email:'',
    password:''
   }

   router:Router = inject(Router)

   login(){
    if(this.loginObj.email === "sayedmostamirkazimi.smk@gmail.com" && this.loginObj.password === "123"){
      const localData = confirm("Are you want username and password save to localStorage!");
      if(localData){
        localStorage.setItem('login',JSON.stringify(this.loginObj));
        
      }
      
        this.router.navigateByUrl('dashboard');
    }
    else{
      alert("The username and password is wrong!");
    }
   }
}
