import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseurl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }
  login(data):Observable<any>{
    return this.http.post(`${baseurl}api/users/login/`,data);
  }

  signup(data):Observable<any>{
    return this.http.post(`${baseurl}api/users/register/`,data);
  }
}
