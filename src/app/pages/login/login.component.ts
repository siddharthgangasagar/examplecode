import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Route, Router } from '@angular/router';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,  // ✅ पाहा हे आहे का! acha ut lamal khi
  imports:[FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
    loginObj:any={
  "EmailId": "",
  "Password": ""
};


 constructor(private http :HttpClient, private router:Router){}

onLogin(){
  debugger;
this.http.post('/api/User/Login', this.loginObj).subscribe((res:any)=>{
    if(res.result){
      alert('Login success')
      localStorage.setItem('loginToken', res.data.token);
      this.router.navigateByUrl('/dashboard')
    } else{
      alert(res.result);
    }
  }) 
}

}
