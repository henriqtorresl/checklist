import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-adicionar-tarefa-dialog',
  templateUrl: './adicionar-tarefa-dialog.component.html',
  styleUrls: ['./adicionar-tarefa-dialog.component.scss']
})
export class AdicionarTarefaDialogComponent {

  constructor(
    private dialogRef: MatDialogRef<AdicionarTarefaDialogComponent>,
  ) {}

  // método para fechar o dialog
  cancel(): void {
    this.dialogRef.close();
    console.log('fechei');
  }

  adicionar(): void {
    console.log('Adicionei');
    
    this.dialogRef.close();
  }

}