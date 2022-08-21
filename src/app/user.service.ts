import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  passemail(email: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }

  register(data:any){
    let url="http://localhost:8080/user/register"
    return this.http.post(url,data);
  }

  login(data:any){
    let url="http://localhost:8080/user/login";
    return this.http.post(url,data);
  }
}
