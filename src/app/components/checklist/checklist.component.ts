import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdicionarTarefaDialogComponent } from '../dialogs/adicionar-tarefa-dialog/adicionar-tarefa-dialog.component';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {
  listaDeTarefas: string[] = ['Estudar', 'Cagar'];

  // injeção de depndências
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    
  }

  // método que abre o dialog:
  addTarefa():void {
    const dialogRef = this.dialog.open(AdicionarTarefaDialogComponent, {
      width: '550px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('O dialog foi fechado');
    });
  }

  removerDaLista(tarefa: string) {
    this.listaDeTarefas.splice(this.listaDeTarefas.indexOf(tarefa), 1);   // remove 1 item a partir da posição da 'tarefa', ou seja, vai remover apenas a tarefa
  }

}
