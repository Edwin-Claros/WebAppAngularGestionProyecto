import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  constructor(private http:HttpClient) { }



  getEquipo():Observable<any>{return this.http.get("https://webapigestionproyecto120190830030709.azurewebsites.net/api/Equipo");}
  getCarrera():Observable<any>{return this.http.get("https://webapigestionproyecto120190830030709.azurewebsites.net/api/Carrera")}
  getEvento():Observable<any>{return this.http.get("https://webapigestionproyecto120190830030709.azurewebsites.net/api/Evento");}
  getEventoActivo():Observable<any>{return this.http.get("https://webapigestionproyecto120190830030709.azurewebsites.net/api/EventoActivos");}
  getCatalogoEstado():Observable<any>{return this.http.get("https://webapigestionproyecto120190830030709.azurewebsites.net/api/CatalogoEstado");}


  
  addEquipo(equipo:any)
  {
    let json=JSON.stringify(equipo);
    let headers=new HttpHeaders().set('content-Type','application/json');
  
    return this.http.post("https://webapigestionproyecto120190830030709.azurewebsites.net/api/Equipo",json,{headers:headers});
  }
  addParticipante(participante:any)
  {
    let json=JSON.stringify(participante);
    let headers=new HttpHeaders().set('content-Type','application/json');
  
    return this.http.post("https://webapigestionproyecto120190830030709.azurewebsites.net/api/Participante",json,{headers:headers});
  }
  
  deleteEquipo(identificador):Observable<any>
  {
    return this.http.delete("https://webapigestionproyecto120190830030709.azurewebsites.net/api/Equipo/"+identificador);
  }


























}


