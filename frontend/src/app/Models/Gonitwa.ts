import { Time, DatePipe } from '@angular/common';


export class GonitwaLista{
    nrWierzchowca: number;
    nazwaWierzchowca:string;
    nrDzokeja:number;
    imie:string;
    nazwisko:string;
}
export class GonitwaSzczegoly{
    nazwaNagrody: string;
    warunkiGonitwy: string;
    godzinaRozpoczecia: Time;
    data:Date;
    dlugosc:number;
    nagrodazaIMiejsce:number;
    nagrodazaIIMiejsce:number;
    nagrodazaIIIMiejsce:number;
    nagrodazaIVMiejsce:number;
    nagrodazaVMiejsce:number;
}
export class GonitwaAll{
    nrGonitwyWSezonie:number;
    nrGonitwyWDniu:number;
    nazwaNagrody:string;
    godzinaRozpoczecia: Date;
    data:Date;
    dlugosc:number;
}