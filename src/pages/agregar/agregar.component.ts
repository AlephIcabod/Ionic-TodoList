import { Component, OnInit } from '@angular/core';
import { AlertController,NavController } from 'ionic-angular';

import {TodoListService} from '../../app/services/todoList.service'

import { ListItem } from '../../app/classes/list-item';
import {List } from '../../app/classes/list';




@Component({
  selector: 'agregar-app',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent implements OnInit {

  listName:string
  itemName:string=""
  items:ListItem[]=[]

  constructor(private todoService:TodoListService,
              private navCtrl:NavController,
              private alert:AlertController) { }

  ngOnInit() { }


  agregar(){
    if(this.itemName.length==0)
    return
    this.items.push(new ListItem(this.itemName))
    this.itemName=""
  }

  eliminar(i:number){
    this.items.splice(i,1)
  }
  guardarLista(){
    if (this.listName){
      let list=new List(this.listName)
      list.items=this.items
      this.todoService.create(list)
      this.navCtrl.pop()
    }else{
      let alert = this.alert.create({
        title: 'No se pudo guardar lista',
        subTitle: 'Antes de guardar la lista por favor ingresa un nombre',
        buttons: ['OK']
      });
      alert.present();
      return
    }
  }
}
