import { Component, OnInit } from '@angular/core';
import {GonitwaAll} from '../Models/Gonitwa';
import { GonitwaServiceService } from '../Services/gonitwa-service.service';
 import {first} from 'rxjs/operators';

@Component({
  selector: 'app-gonitwy',
  templateUrl: './gonitwy.component.html',
  styleUrls: ['./gonitwy.component.css']
})

export class GonitwyComponent implements OnInit {

  gonitwy: GonitwaAll[]=[];
  gonitwyFuture: GonitwaAll[]=[];
  constructor(private gonitwaService:GonitwaServiceService) { }
  
  
  ngOnInit() {
  this.gonitwaService.getAll().pipe(first()).subscribe(s=>this.gonitwy=s);
    this.gonitwaService.getAllFuture().pipe(first()).subscribe(s=>this.gonitwyFuture=s);
}

}
