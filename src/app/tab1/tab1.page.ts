import { Component } from '@angular/core';
import { ServicioAgendaService } from '../servicios/servicio-agenda.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  nombre:String
  telefono:String
  email:String
  notas:String
  prueba:String
  constructor(public myService:ServicioAgendaService) {
    this.prueba="asdasd";
  }
  guardar(nombre,telefono,email,notas){
    this.myService.letras.push({"nombre":nombre,"telefono":telefono,"email":email,"notas":notas});
    console.log(this.myService.letras);
  }

  borrar(id){
    this.myService.letras.splice(id,1);
  }
}
