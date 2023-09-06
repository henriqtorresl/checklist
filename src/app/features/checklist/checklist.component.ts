import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Tarefa } from 'src/app/models/tarefa.model';
import { AdicionarTarefaDialogComponent } from '../dialogs/adicionar-tarefa-dialog/adicionar-tarefa-dialog.component';
import { TarefaService } from '../services/tarefa.service';
import { take, tap } from 'rxjs';
import { EditarTarefaDialogComponent } from '../dialogs/editar-tarefa-dialog/editar-tarefa-dialog.component';
import { DeletarTarefaDialogComponent } from '../dialogs/deletar-tarefa-dialog/deletar-tarefa-dialog.component';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit, AfterViewInit {

  @Input() tarefas: Tarefa[] = [];
  tarefasFiltradas: Tarefa[] = [];

  constructor(
    private dialog: MatDialog,
    private tarefaService: TarefaService,
  ) {}

  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    this.tarefas.forEach((tarefa, index) => {
      if (index < 4) {
        this.tarefasFiltradas.push(tarefa);
      }
    })

    console.log(this.tarefasFiltradas);
  }

  abrirDialogAdicionar(): void {
    const dialogRef = this.dialog.open(AdicionarTarefaDialogComponent, {});

    dialogRef.afterClosed().pipe(
      tap((tarefa: Tarefa) => {
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
      tap((retorno) => {
        console.log(retorno);
        if (retorno == 'editada') {
          location.reload()
        }
      }),
      take(1)
    ).subscribe()
  }

  abrirDialogDeletar(tarefa: Tarefa): void {
    const dialogRef = this.dialog.open(DeletarTarefaDialogComponent, {
      data: tarefa
    });

    dialogRef.afterClosed().pipe(
      tap((retorno) => {
        console.log(retorno);
        if (retorno == 'deletada') {
          location.reload();
        }
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

  // o "$" antes do event, no html diz para a aplicação angular que o que estou recebendo nesse método é um evento 
  mostrarTarefas(event: PageEvent) {    // função responsável pela lógica do paginator
    console.log('evento emitido!');
    const pageIndex = event.pageIndex;
    
    if (pageIndex == 0) {

      this.tarefasFiltradas.splice(0, this.tarefasFiltradas.length);  // limpa a lista filtrada
      this.tarefas.forEach((tarefa, index) => {
        if (index < 4) {
          this.tarefasFiltradas.push(tarefa);
        }
      });

    } else {

      let index = 1;
      let qnt = 4;
      let contador = 8;

      while (qnt < this.tarefas.length) {
        if (pageIndex == index) {
          this.tarefasFiltradas.splice(0, this.tarefasFiltradas.length);
          this.tarefas.forEach((tarefa, index) => {
            if (index >= qnt && index < contador) {
              this.tarefasFiltradas.push(tarefa);
            }
          });
        }

        index++; 
        qnt += 4;
        contador += 4;

      }
    }
  }
}