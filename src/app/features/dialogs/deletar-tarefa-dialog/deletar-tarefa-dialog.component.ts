import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Tarefa } from 'src/app/models/tarefa.model';
import { TarefaService } from '../../services/tarefa.service';
import { take, tap } from 'rxjs';

@Component({
  selector: 'app-deletar-tarefa-dialog',
  templateUrl: './deletar-tarefa-dialog.component.html',
  styleUrls: ['./deletar-tarefa-dialog.component.scss']
})
export class DeletarTarefaDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DeletarTarefaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Tarefa,
    private tarefaService: TarefaService
  ) {}

  ngOnInit(): void {
    
  }

  deletar(): void {
    this.tarefaService.excluirTarefa(this.data).pipe(
      tap(() => {
        this.dialogRef.close('deletada');
      }),
      take(1)
    ).subscribe();
  }

  cancelar(): void {
    this.dialogRef.close();
  }

}