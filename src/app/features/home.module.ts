import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AdicionarTarefaDialogComponent } from './dialogs/adicionar-tarefa-dialog/adicionar-tarefa-dialog.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';


@NgModule({
  declarations: [
    AdicionarTarefaDialogComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    AppMaterialModule
  ]
})
export class HomeModule { }
