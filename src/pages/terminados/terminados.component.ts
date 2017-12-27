import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../../app/services/todoList.service';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { AgregarComponent } from '../agregar/agregar.component';
import { Detalle } from '../detalle/detalle.component';

@Component({
  selector: 'terminados-app',
  templateUrl: './terminados.component.html',
})
export class Terminados implements OnInit {
  constructor(private todoService:TodoListService,
    private navCtrl:NavController) {

}

ngOnInit() { }

nuevo(){
this.navCtrl.push(AgregarComponent);
}

verDetalle(i,lista){
this.navCtrl.push(Detalle,{i,lista})
}
}
