import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/component/about.component';
import { BodyComponent } from './body/component/body.component';
import { ServiciosViewComponent } from './serviciosView/component/serviciosview.component';
import { ProjectComponent } from './project/component/project.component';
import { ContactComponent } from './contact/component/contact.component';
import {ControlMonitoreoObras} from './serviciosView/subComponents/controlMonitoreoObras.component';
import {ControlProyectos} from './serviciosView/subComponents/controlProyectos.component';
import {DesarrolloAMedida} from './serviciosView/subComponents/desarrolloAMedida.component';
import {DesarrolloSistemas} from './serviciosView/subComponents/desarrolloSistemas.component';


const appRoutes: Routes = [
	/*{path: '', component:BodyComponent},*/
	{path: 'home', component: BodyComponent},
    {path: 'about', component: AboutComponent},
    {path: 'services', component: ServiciosViewComponent},
    {path: 'projects', component: ProjectComponent},
    {path: 'contacts',component:ContactComponent},
    {path: 'services/control-monitoreo-obras',component:ControlMonitoreoObras},
    {path: 'services/control-proyectos',component:ControlProyectos},
    {path: 'services/desarrollo-medida',component:DesarrolloAMedida},
    {path: 'services/desarrollo-sistemas',component:DesarrolloSistemas},
    
    {
      path: '',
	  redirectTo: '/home',
	  pathMatch: 'full'
	 }
    //{ path: '**', component: PageNotFoundComponent }
    //{path: 'about', component: BodyComponent}
];

export const appRoutingProviders: any[] = [
];// luego se cargara solo el appRoutingProviders

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);