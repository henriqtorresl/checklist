import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-adicionar-tarefa-dialog',
  templateUrl: './adicionar-tarefa-dialog.component.html',
  styleUrls: ['./adicionar-tarefa-dialog.component.scss']
})
export class AdicionarTarefaDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<AdicionarTarefaDialogComponent>
  ) {}

  ngOnInit(): void {

  }

  fechar(): void {
    this.dialogRef.close();
  }

}