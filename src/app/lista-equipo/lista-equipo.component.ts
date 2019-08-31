import { Component, OnInit } from '@angular/core';
import {EquipoService} from './../equipo.service';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-lista-equipo',
  templateUrl: './lista-equipo.component.html',
  styleUrls: ['./lista-equipo.component.scss']
})
export class ListaEquipoComponent implements OnInit {

  obtenerDatosEquipo:any;

  constructor( private _service:EquipoService, private ruta:ActivatedRoute) 
  {
    this.getEquipoServicio();
    this.ruta.params.subscribe(params=>
      {
        console.log(params['id']);
        this.obtenerDatosEquipo[params['id']];
      })
   }

  ngOnInit() {
  }

obtnetenerUno(i)
{
return this.obtenerDatosEquipo[i];
}

  
  getEquipoServicio()
  {
    this._service.getEquipo().subscribe(result => {
  this.obtenerDatosEquipo=result;
    },
    error => {
  console.log(JSON.stringify(error));
    });
  }

}