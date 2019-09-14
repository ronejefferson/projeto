import { Injectable } from '@angular/core';
import { Evento } from '../model/evento';
import { HttpClient } from '@Angular/common/http';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class EventoService {
  private db = environment.serveAPI;

  constructor(
    protected http:HttpClient
  ) { }
  save(evento:Evento){
    return this.http.post(this.db + "eventos", evento)
}
getAll(){
  return this.http.get(this.db + "eventos")
}

}
