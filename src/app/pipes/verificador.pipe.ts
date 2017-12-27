import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../classes/list';

@Pipe({name: 'verificalistas',pure:false})
export class VerficaListasPipe implements PipeTransform {
  transform(listas: List[],estado:boolean=false):boolean {
    let aux=listas.filter(i=>i.finished==estado)
    return aux.length===0
  }
}
