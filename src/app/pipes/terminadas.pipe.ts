import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../classes/list';

@Pipe({name: 'filtradorListas',pure:false})
export class FiltradorListasPipe implements PipeTransform {
  transform(listas:List[],estado:boolean=false):List[] {
    return listas.filter(i=>i.finished==estado)
  }
}
