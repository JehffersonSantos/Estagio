import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepartamentosComponent } from './Departamentos/Departamentos.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { PerfilComponent } from './perfil/perfil.component';


const routes: Routes = [
  { path: '', redirectTo:'dashboard',pathMatch:'full'},
  { path: 'dashboard', component:DashboardComponent},
  { path: 'funcionarios', component:FuncionariosComponent},
  { path: 'perfil', component:PerfilComponent},
  { path: 'departamentos', component:DepartamentosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
