import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddStazaComponent } from './addstaza/addstaza.component';
import { AddVozacComponent } from './addvozac/addvozac.component';
import { RegisterComponent } from './register/register.component';
import { AllVozaciComponent } from './allvozaci/allvozaci.component';
import { AllStazeComponent } from './allstaze/allstaze.component';
import { LoginComponent } from './login/login.component';
import { AllBolidComponent } from './allbolid/allbolid.component';
import { AddBolidComponent } from './addbolid/addbolid.component';
import { VozacComponent } from './vozac/vozac.component';
import { EditVozacComponent } from './editvozac/editvozac.component';

const appRoutes: Routes = [

{ path: 'addstaza', component: AddStazaComponent},
{ path: 'addvozac', component: AddVozacComponent},
{ path: 'register', component: RegisterComponent},
{ path: 'login', component: LoginComponent},

{ path: 'allvozaci', component: AllVozaciComponent},
{ path: 'allstaze', component: AllStazeComponent},
{ path: 'addbolid', component: AddBolidComponent},
{ path: 'allbolid', component: AllBolidComponent},
{ path: 'vozac/:id', component: VozacComponent},
{
    path: 'editvozac/:id',
    component: EditVozacComponent
  }

];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
