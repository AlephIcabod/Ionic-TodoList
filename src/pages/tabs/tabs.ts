import { Component } from '@angular/core';

import { Pendientes } from '../pendientes/pendientes.component';
import { Terminados } from '../terminados/terminados.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Pendientes;
  tab2Root = Terminados;

  constructor() {

  }
}
