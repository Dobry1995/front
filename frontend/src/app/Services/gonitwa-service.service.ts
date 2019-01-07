import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {GonitwaAll,GonitwaSzczegoly, GonitwaLista} from '../Models/Gonitwa'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GonitwaServiceService {

  constructor(private http:HttpClient) { }


    getAll(): Observable<GonitwaAll[]>{
     return this.http.get<GonitwaAll[]>('https://localhost:44373/api/Gonitwa/all');
    }
    getAllFuture():Observable<GonitwaAll[]>{
      return this.http.get<GonitwaAll[]>('https://localhost:44373/api/Gonitwa/all/future');
    }
    getSzczegolyById(id:number){
      return this.http.get<GonitwaSzczegoly>(`https://localhost:44373/api/Gonitwa/Szczegoly/${id}`);
    }
    getListaWysciguById(id:number):Observable<GonitwaLista[]>{
      return this.http.get<GonitwaLista[]>(`https://localhost:44373/api/ListaStartowa/lista-wyscigu/${id}`);
    }

}
