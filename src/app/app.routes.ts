import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { HomePageComponent } from './home/home.component';
//import { AboutUsComponent } from './aboutus/aboutus.component';
import { AddStazaComponent } from './addstaza/addstaza.component';
import { AddVozacComponent } from './addvozac/addvozac.component';
import { RegisterComponent } from './register/register.component';
import { AllVozaciComponent } from './allvozaci/allvozaci.component';
import { AllStazeComponent } from './allstaze/allstaze.component';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [

{ path: 'addstaza', component: AddStazaComponent},
{ path: 'addvozac', component: AddVozacComponent},
{ path: 'register', component: RegisterComponent},
{ path: 'login', component: LoginComponent},

{ path: 'allvozaci', component: AllVozaciComponent},
{ path: 'allstaze', component: AllStazeComponent}

];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
