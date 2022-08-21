import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';


export class Admin {
  private aid!: number;
  private aname!: string;
  private aemail!: string;
  private apassword!: string;
}


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  credential={
    aemail:'',
    apassword:''
  }
  constructor(private http:HttpClient, private adminservice:AdminService) { }

  admin!: Admin[];


  ngOnInit(): void {
  }

  onlogin(){
    if((this.credential.aemail!='' && this.credential.apassword!='') && 
    ( this.credential.aemail!=null && this.credential.apassword!=null)){
      console.log("Form is submitted");
      this.adminservice.login(this.credential).subscribe(
        response=>{
          // console.log(response.constructor.name);
          if(response){   
            console.log(response);
         
            window.location.href=""
          }
          else{
            alert("Invalid Credentials");
          }
        }
      )
      }
      else{
        console.log("Fields are empty");
        
        
      }
  }

}
