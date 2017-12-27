import { Injectable } from '@angular/core';

import {List} from '../classes/list'


@Injectable()
export class TodoListService {
  listas:List[]=[]

  constructor(){
    this.loadData()
  }


  create(lista:List){
    this.listas.push(lista)
    this.updateData()
  }

  updateData(){
    localStorage.setItem("data",JSON.stringify(this.listas))
  }

  loadData(){
    if (localStorage.getItem("data"))
      this.listas=JSON.parse(localStorage.getItem("data"))
  }

  delete(i){
    this.listas.splice(i,1)
    this.updateData()
  }

}
