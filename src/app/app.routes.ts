import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { HomePageComponent } from './home/home.component';
//import { AboutUsComponent } from './aboutus/aboutus.component';
import { AddStazaComponent } from './addstaza/addstaza.component';
import { AddVozacComponent } from './addvozac/addvozac.component';


const appRoutes: Routes = [

{ path: 'addstaza', component: AddStazaComponent},
{ path: 'addvozac', component: AddVozacComponent}

];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
