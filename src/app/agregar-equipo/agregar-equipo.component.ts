import { Component, OnInit } from '@angular/core';
import {EquipoService} from './../equipo.service';
import { AgregarEquipoModels } from '../Models/EquipoModels';
import { FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-agregar-equipo',
  templateUrl: './agregar-equipo.component.html',
  styleUrls: ['./agregar-equipo.component.css']
})
export class AgregarEquipoComponent implements OnInit {

  obtenerDatosEquipo:any;
  obtenerDatosEvento:any;
  MENSAJE:any;

  FormularioGuardar:FormGroup;

  constructor
  (
    private _service:EquipoService,
    private formularioB:FormBuilder
  ) 
  {
    this.getEquipoServicio();
 this.getEventoServicio();
  }

  ngOnInit() 
  {
    this.FormularioGuardar=this.formularioB.group({
     
      equipopNombre:[''],
      evento_Id:['']
    });
  }

  onSubmit(ModeloClase:any)
  {
    const agregar = new AgregarEquipoModels();
    agregar.equipopNombre=ModeloClase.equipopNombre;
    agregar.evento_Id=ModeloClase.evento_Id;
this._service.addEquipo(agregar).subscribe(resultado=>{
},
error=>{
//this.MENSAJE = console.log(JSON.stringify(error));
this.MENSAJE = JSON.stringify(error);
});
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
