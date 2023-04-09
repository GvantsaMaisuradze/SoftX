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
  getDataById(id: string): any {
    const fullUrl = `${environment.apiBaseUrl}/${id}`;
    return this.httpClient.get(fullUrl);
  }
 
}
