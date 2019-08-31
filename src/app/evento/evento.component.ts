import { Component, OnInit } from '@angular/core';
import {EquipoService} from './../equipo.service';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {

  obtenerDatosEvento:any;

  constructor(private _service:EquipoService) {
    this.getEventoServicio();
   }

  ngOnInit() {
  }

  getEventoServicio()
  {
    this._service.getEvento().subscribe(result => {
  this.obtenerDatosEvento=result;
    },
    error => {
  console.log(JSON.stringify(error));
    });
  }














}
