import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Tarefa } from 'src/app/models/tarefa.model';
import { AdicionarTarefaDialogComponent } from '../dialogs/adicionar-tarefa-dialog/adicionar-tarefa-dialog.component';
import { TarefaService } from '../services/tarefa.service';
import { take, tap } from 'rxjs';
import { EditarTarefaDialogComponent } from '../dialogs/editar-tarefa-dialog/editar-tarefa-dialog.component';
import { DeletarTarefaDialogComponent } from '../dialogs/deletar-tarefa-dialog/deletar-tarefa-dialog.component';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {

  @Input() tarefas: Tarefa[] = [];

  constructor(
    private dialog: MatDialog,
    private tarefaService: TarefaService,
  ) {}

  ngOnInit(): void {

  }

  abrirDialogAdicionar(): void {
    const dialogRef = this.dialog.open(AdicionarTarefaDialogComponent, {});

    dialogRef.afterClosed().pipe(
      tap((tarefa: Tarefa) => {
        console.log('dialog foi fechado!');
        if (tarefa !== undefined) {
          this.tarefas.push(tarefa);    // atualizando o dataSource
        }
      }),
      take(1)
    ).subscribe();
  }

  abrirDialogEditar(tarefa: Tarefa): void {
    const dialogRef = this.dialog.open(EditarTarefaDialogComponent, {
      data: tarefa
    });

    dialogRef.afterClosed().pipe(
      tap(() => {
        // FALTA ATUALIZAR O DATASOURCE DEPOIS QUE A QUESTÃO FOI EDITADA!

        console.log('dialog foi fechado!');
      }),
      take(1)
    ).subscribe()
  }

  abrirDialogDeletar(): void {
    const dialogRef = this.dialog.open(DeletarTarefaDialogComponent, {});

    dialogRef.afterClosed().pipe(
      tap(() => {
        console.log('dialog foi fechado!');
      }),
      take(1)
    ).subscribe()
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