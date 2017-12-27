import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Pendientes } from '../pages/pendientes/pendientes.component';
import { Detalle } from '../pages/detalle/detalle.component';
import { Terminados } from '../pages/terminados/terminados.component';
import {AgregarComponent } from '../pages/agregar/agregar.component';


import { TodoListService } from './services/todoList.service';

import { PlaceholderPipe } from './pipes/placeholder.pipe';
import { FiltradorListasPipe } from './pipes/terminadas.pipe';
import { VerficaListasPipe } from './pipes/verificador.pipe';



@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    Pendientes,
    Terminados,
    AgregarComponent,
    PlaceholderPipe,
    FiltradorListasPipe,
    VerficaListasPipe,
    Detalle
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    Pendientes,
    Terminados,
  AgregarComponent,
  Detalle
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TodoListService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
