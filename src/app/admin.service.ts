import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  register(data:any){
    let url="http://localhost:8080/admin/register"
    return this.http.post(url,data);
  }
  
  login(data:any){
    let url="http://localhost:8080/admin/login";
    return this.http.post(url,data);
  }
}
