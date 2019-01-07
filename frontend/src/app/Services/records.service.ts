import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Wierzchowiec } from '../Models/Wierzchowiec';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})

export class RecordsService {

  constructor(private http: HttpClient) { }

  wierzchowce:Wierzchowiec[];

  getWierzchowce(): Observable<Wierzchowiec[]>{
    return this.http.get<Wierzchowiec[]>('https://localhost:44373/api/profile/wierzchowiec/all')
    
  }

  }

