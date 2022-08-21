import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { UserService } from '../user.service';

export class User {
  private uid!: number;
  private uname!: string;
  private uemail!: string;
  private upassword!: string;
}



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user!: User[];
  constructor(private http:HttpClient, private adminservice:AdminService, private userservice:UserService) { }

  public message=false; 
  ngOnInit(): void {    
  }

  filteredString:string = '';
  public data:any = [] ;
 

  uname!:string;
  loggedInUser(){
    if(localStorage.getItem('User')){
      const data = JSON.parse(localStorage.getItem('User') || '{}');
      this.uname = data[0].uname;
      
      
      const temp = localStorage.getItem('User');
      return temp;
    }else{
      const temp2 = localStorage.getItem('Admin');
      return temp2;
    }
  }



  onLogout(){
    console.log("logout successfully");
    localStorage.removeItem('User');
    localStorage.removeItem('Admin');
  }


}
