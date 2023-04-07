import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userStatus:boolean = false;

  constructor() { }

  public isUserAuth():any{
    var promise = new Promise((resolve,reject )=> {
      setTimeout(()=>{
         resolve(this.userStatus)
      },500)

    });
    return promise;
  }

  public LogIn(){
    this.userStatus = true;
  }
}
