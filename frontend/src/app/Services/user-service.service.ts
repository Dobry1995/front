import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';  
import {Gracz,GraczHaslo} from '../Models/Gracz';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {}

  register(gracz: Gracz){
    return this.http.post('https://localhost:44373/api/Gracz/register',gracz);
  }

  getAll():Observable<Gracz[]>{
    return this.http.get<Gracz[]>('https://localhost:44373/api/profile/Graczprofile/all');
  }

  getById(id: number):Observable<Gracz>{
    return this.http.get<Gracz>(`https://localhost:44373/api/profile/Graczprofile/${id}`);
  }
  updateUser(id:number,gracz:Gracz){
    return this.http.put<Gracz>(`https://localhost:44373/api/Gracz/update/${id}`,gracz);
  }
  updateUserHaslo(id:number,gracz:Gracz){
    return this.http.put<Gracz>(`https://localhost:44373/api/Gracz/update/password/${id}`,gracz);
  }
}
