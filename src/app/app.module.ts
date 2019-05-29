import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';

import { routing, appRoutingProviders} from './app.routing';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { SliderComponent } from './slider/component/slider.component';
import { MenuComponent } from './menu/component/menu.component';
import { BodyComponent } from './body/component/body.component';
import { AboutComponent } from './about/component/about.component';
import { ServiciosViewComponent } from './serviciosView/component/serviciosview.component';
import { ProjectComponent } from './project/component/project.component';
import { HeaderComponent } from './header/component/header.component';
import { FooterComponent } from './footer/component/footer.component';
import { ContactComponent } from './contact/component/contact.component';
import {ControlMonitoreoObras} from './serviciosView/subComponents/controlMonitoreoObras.component';
import {ControlProyectos} from './serviciosView/subComponents/controlProyectos.component';
import {DesarrolloAMedida} from './serviciosView/subComponents/desarrolloAMedida.component';
import {DesarrolloSistemas} from './serviciosView/subComponents/desarrolloSistemas.component';


@NgModule({
  declarations: [ AppComponent,
    SliderComponent,
    MenuComponent,
    BodyComponent,
    AboutComponent,
    ServiciosViewComponent,
    ProjectComponent,
    FooterComponent,
    ContactComponent,
    HeaderComponent,
    ControlMonitoreoObras,
    ControlProyectos,
    DesarrolloAMedida,
    DesarrolloSistemas],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [  appRoutingProviders,
    {provide: LocationStrategy, useClass: HashLocationStrategy}],

  bootstrap:    [ AppComponent,
    //SliderComponent,
    MenuComponent,
    FooterComponent,
    HeaderComponent
    //HeaderComponent
    //BodyComponent,
    //AboutComponent,
    //ServiciosViewComponent,
    //ProjectComponent
  ]
})
export class AppModule { }
