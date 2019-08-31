import { Component, OnInit } from '@angular/core';
import {EquipoService} from './../equipo.service';
import { AgregarPaticipanteModels } from '../Models/ParticipanteModels';
import { FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-participante',
  templateUrl: './participante.component.html',
  styleUrls: ['./participante.component.css']
})
export class ParticipanteComponent implements OnInit {

  

  obtenerDatosCarrera:any;
  obtenerDatosEquipo:any;

  FormularioGuardar:FormGroup;

  constructor
  (
    private _service:EquipoService,
    private formularioB:FormBuilder
  ) 
  {
    this.getCarreraServicio();
    this.getEquipoServicio();
  }

  ngOnInit() 
  {
    this.FormularioGuardar=this.formularioB.group({
     
      participanteNombre:[''],
      carrera_Id:[''],
      equipo_Id:['']
    });
  }

  onSubmit(ModeloClase:any)
  {
    const agregar = new AgregarPaticipanteModels();
    agregar.participanteNombre=ModeloClase.participanteNombre;
    agregar.carrera_Id=ModeloClase.carrera_Id;
    agregar.equipo_Id=ModeloClase.equipo_Id;
this._service.addParticipante(agregar).subscribe(resultado=>{
},
error=>{
console.log(JSON.stringify(error));
});
  }



  getCarreraServicio()
  {
    this._service.getCarrera().subscribe(result => {
      
  this.obtenerDatosCarrera=result;
    },
    error => {
  console.log(JSON.stringify(error));
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





}
