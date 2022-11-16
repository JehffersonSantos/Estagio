import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartamentosComponent } from './Departamentos/Departamentos.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';

const routes: Routes = [
  { path:'Departamentos', component: DepartamentosComponent},
  { path:'Funcionarios', component: FuncionariosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
