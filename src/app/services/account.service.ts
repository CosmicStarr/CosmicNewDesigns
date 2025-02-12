import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map, ReplaySubject } from 'rxjs';
import { IUser } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = 'https://localhost:5001/api/'
  public currentUserSource = new ReplaySubject<IUser>(1)
  currentUser$ = this.currentUserSource.asObservable()
  helper = new JwtHelperService();
  constructor(private http:HttpClient) { }
  login(values:any){
    return this.http.post<IUser>(this.baseUrl + 'Account/Login',values).pipe(
      map((results:IUser)=>{
        if(results){
          const decodeToken = this.helper.decodeToken<IUser>(results.token)
          results.email = decodeToken.email;
          results.JobDepartment = decodeToken.JobDepartment;
          results.role = decodeToken.role;
          localStorage.setItem('user',JSON.stringify(results))
          localStorage.setItem('token',results.token)
          this.setCurrentUser(results)
          console.log(results)
          return results
        }
      })
    )
  }

  setCurrentUser(user:IUser){
    if(user){
      user.role = [];
      const roles = this.decodeToken(user.token).role;
      Array.isArray(roles)? user.role = roles : user.role.push(roles);
      localStorage.setItem('user',JSON.stringify(user))
      this.currentUserSource.next(user);
    }
  }

  decodeToken(token: string){
    return JSON.parse(atob(token.split('.')[1]));
  }
}
