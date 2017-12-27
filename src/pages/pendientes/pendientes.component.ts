import { Component, OnInit } from '@angular/core';
import {NavController} from 'ionic-angular'

import { TodoListService } from '../../app/services/todoList.service';
import { AgregarComponent} from '../agregar/agregar.component'
import { Detalle } from '../detalle/detalle.component';


@Component({
  selector: 'pendientes-app',
  templateUrl: './pendientes.component.html',
})
export class Pendientes implements OnInit {

  constructor(private todoService:TodoListService,
            private navCtrl:NavController) {
    console.log(todoService)
   }

  ngOnInit() { }

  nuevo(){
    this.navCtrl.push(AgregarComponent);
  }

  verDetalle(i,lista){
    this.navCtrl.push(Detalle,{i,lista})
  }
}
