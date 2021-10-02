import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  commonUrl = 'localhost:3000/api/users/login'

  constructor(private _http:HttpClient) { }

  login(data:any):Observable<any>{
    return this._http.post(`${this.commonUrl}login`,data)
  }
  me():Observable<any>{
    return this._http.post(`${this.commonUrl}`,{"madiha":1})
       
    
  }
}
