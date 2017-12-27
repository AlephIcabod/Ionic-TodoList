import { ListItem } from './list-item';



export class List{
  name:string;
  finished:boolean;
  items:ListItem[];

  constructor(nombre:string){
    this.name=nombre;
    this.finished=false;
    this.items=[];
  }
}
