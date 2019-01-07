import { Component, OnInit, OnDestroy } from '@angular/core';
import { GonitwaServiceService } from '../Services/gonitwa-service.service';
import {GonitwaSzczegoly, GonitwaLista} from '../Models/Gonitwa';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-szczegoly-wyscigu',
  templateUrl: './szczegoly-wyscigu.component.html',
  styleUrls: ['./szczegoly-wyscigu.component.css']
})
export class SzczegolyWysciguComponent implements OnInit {
  szczegoly:GonitwaSzczegoly;
  lista:GonitwaLista[];
  id:number;
  private sub:any;

  constructor(private serviceGonitwy: GonitwaServiceService,
    private route: ActivatedRoute) { }

  ngOnInit() {
  this.sub=this.route.params.subscribe(params=>{
    this.id=+params['id'];
    this.serviceGonitwy.getSzczegolyById(this.id).subscribe(s=>this.szczegoly=s)
    this.serviceGonitwy.getListaWysciguById(this.id).subscribe(s=>this.lista=s)
  })
  }
  ngOnDestory(){
    this.sub.unsubscribe();
  }
}
