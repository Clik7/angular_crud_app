import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminLogin } from '../classes/auth/admin-login';
import { LoginResponse } from '../classes/auth/login-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  APIURL:string = 'https://epicode.online/epicodebeservice/';

  currentUser!:LoginResponse;


  constructor( private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  login(loginPayload:AdminLogin){
    return this.http.post<LoginResponse>(this.APIURL+'api/auth/login/', loginPayload)
  }

  logout(){
    localStorage.removeItem('accessToken')
    localStorage.removeItem('currentUser')
    this.router.navigate(['']);
  }

  isLogged(){
    return localStorage.getItem('accessToken') != null;
  }
  utenteCorrente() {
    return localStorage.getItem('currentUser') || null;
  }
  userToken() {
    return localStorage.getItem('accessToken') || null;
  }

}
