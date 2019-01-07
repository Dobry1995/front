import { Component, OnInit } from '@angular/core';
import {Wierzchowiec} from '../Models/Wierzchowiec';
import {RecordsService} from '../Services/records.service'


@Component({
  selector: 'app-wierzchowiec',
  templateUrl: './wierzchowiec.component.html',
  styleUrls: ['./wierzchowiec.component.css']
})


export class WierzchowiecComponent implements OnInit {

  koniki: Wierzchowiec[];
  selectedkoniki: Wierzchowiec;

  constructor(private service: RecordsService) { }

  ngOnInit() {
    this.service.getWierzchowce().subscribe(s=>this.koniki=s);
  }
  onSelect(wierzchowiec){
    this.selectedkoniki=wierzchowiec;
  }

}
