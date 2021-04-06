import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './Lista/add/add.component';
import { EditarComponent } from './Lista/editar/editar.component';
import { ListarComponent } from './Lista/listar/listar.component';

const routes: Routes = [  
  {path: 'add', component: AddComponent},
  {path: 'editar', component: EditarComponent},
  {path: 'lista', component: ListarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
