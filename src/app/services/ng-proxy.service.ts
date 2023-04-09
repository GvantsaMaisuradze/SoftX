import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NgProxyService {

  constructor(private httpClient:HttpClient) { }

  getAllData():any{
    var fullUrl:string= `${environment.apiBaseUrl}`
    return this.httpClient.get(fullUrl);
  }
 
}
