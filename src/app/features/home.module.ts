import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AdicionarTarefaDialogComponent } from './dialogs/adicionar-tarefa-dialog/adicionar-tarefa-dialog.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EditarTarefaDialogComponent } from './dialogs/editar-tarefa-dialog/editar-tarefa-dialog.component';
import { DeletarTarefaDialogComponent } from './dialogs/deletar-tarefa-dialog/deletar-tarefa-dialog.component';


@NgModule({
  declarations: [
    AdicionarTarefaDialogComponent,
    EditarTarefaDialogComponent,
    DeletarTarefaDialogComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    AppMaterialModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
