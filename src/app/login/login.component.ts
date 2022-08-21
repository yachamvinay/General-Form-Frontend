import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';

export class User {
  private uid!: number;
  private uname!: string;
  private uemail!: string;
  private upassword!: string;
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credential={
    uemail:'',
    upassword:''
  }
  constructor(private userservice:UserService, private authservice:AuthService, private http:HttpClient) { }

  public token:any;
  user!: User[];

 

  ngOnInit(): void {
  }
  public result=false;


  passemail(){
    this.userservice.passemail(this.email);
  }
  email:any;
  onlogin(){
    if((this.credential.uemail!='' && this.credential.upassword!='') && 
    ( this.credential.uemail!=null && this.credential.upassword!=null)){
      this.email = this.credential.uemail;
      
      console.log("Form is submitted");
      this.userservice.login(this.credential).subscribe(
        response=>{
          // console.log(response.constructor.name);
          if(response){   
                  
            window.location.href=""
          }
          else{
            alert("Invalid Credentials");
          }
        }
      )
      }
      else{
        alert("Fields are empty");
        
        
      }
  }

}
