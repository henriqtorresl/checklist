import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Tarefa } from 'src/app/models/tarefa.model';
import { AdicionarTarefaDialogComponent } from '../dialogs/adicionar-tarefa-dialog/adicionar-tarefa-dialog.component';
import { TarefaService } from '../services/tarefa.service';
import { take, tap } from 'rxjs';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {

  @Input() tarefas: Tarefa[] = [];

  constructor(
    private dialog: MatDialog,
    private tarefaService: TarefaService
  ) {}

  ngOnInit(): void {
    
  }

  abrirDialog(): void {
    const dialogRef = this.dialog.open(AdicionarTarefaDialogComponent, {
      // dados que possivelmente serão passados..
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog foi fechado!');
    });
  }

  mudarStatus(tarefa: Tarefa): void {
    if ( tarefa.realizada == true ) {
      tarefa.realizada = false;
    } else {
      tarefa.realizada = true;
    }

    const tarefaAtualizada: Tarefa = tarefa;
    console.log('Status da tarefa atualizado: ', tarefaAtualizada);

    this.tarefaService.atualizarTarefa(tarefaAtualizada).pipe(
      tap(console.log),
      take(1)
    ).subscribe();
  }

}