import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { serverUrl } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  url = serverUrl;
  public signup(obj){
    return this.http.post(this.url + '/user/sign-up',obj);
  }

  public login(obj){
    return this.http.post(this.url + '/user/login', obj);
  }
}
