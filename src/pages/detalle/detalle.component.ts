import { Component, OnInit } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { List } from '../../app/classes/list';
import { TodoListService } from '../../app/services/todoList.service';
import { ListItem } from '../../app/classes/list-item';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';




@Component({
  selector: 'detalle-app',
  templateUrl: './detalle.component.html',
})
export class Detalle implements OnInit {
  i:number
  lista:List

  constructor(private navCtrl:NavController,private navParams:NavParams,private todoService:TodoListService,private alertCtrl:AlertController) {

      this.i=this.navParams.get("i")
      this.lista=this.navParams.get("lista")

   }

  ngOnInit() { }

   actualizarNombre(){
      this.todoService.updateData()
   }

   actualizar(item:ListItem){
      item.finished=!item.finished
      this.lista.finished=this.lista.items.reduce((x,i:ListItem)=>{
        return i.finished&&x
      },true)
      this.todoService.updateData()
   }

   eliminar(){
    let confirm = this.alertCtrl.create({
      title: 'Elimnar lista',
      message: `¿Esta seguro de que desea eliminar la lista ${this.lista.name}?`,
      buttons: [
         'Cancelar',
        {
          text: 'Eliminar',
          handler: () => {
            this.todoService.delete(this.i)
            this.navCtrl.pop()
          }
        }
      ]
    });
    confirm.present();
     //this.todoService.listas.slice(this.i,1)
   }
}
