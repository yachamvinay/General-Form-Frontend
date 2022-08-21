import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-adminregister',
  templateUrl: './adminregister.component.html',
  styleUrls: ['./adminregister.component.css']
})
export class AdminregisterComponent implements OnInit {


  credential={
    aname:'',
    aemail:'',
    apassword:''
  }

  constructor(private adminservice:AdminService) { }

  ngOnInit(): void {
  }

  addAdmin(){
    if((this.credential.aname!='' && this.credential.aemail!='' && this.credential.apassword!='') && 
    (this.credential.aname!=null && this.credential.aemail!=null && this.credential.apassword!=null)){
      console.log("Form is submitted");
      this.adminservice.register(this.credential).subscribe(
        response=>{
          console.log( response);
          window.location.href=""
        }
      )
      }
      else{
        console.log("Fields are empty");
        
      }
    }

}
