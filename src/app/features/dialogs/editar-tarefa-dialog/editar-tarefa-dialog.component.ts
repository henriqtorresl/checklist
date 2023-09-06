import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TarefaService } from '../../services/tarefa.service';
import { Tarefa } from 'src/app/models/tarefa.model';
import { take, tap } from 'rxjs';

@Component({
  selector: 'app-editar-tarefa-dialog',
  templateUrl: './editar-tarefa-dialog.component.html',
  styleUrls: ['./editar-tarefa-dialog.component.scss']
})
export class EditarTarefaDialogComponent implements OnInit {

  formTarefa!: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditarTarefaDialogComponent>,
    private formBuilder: FormBuilder,
    private tarefaService: TarefaService,
    @Inject(MAT_DIALOG_DATA) private data: Tarefa
  ) {}

  ngOnInit(): void {

    this.criarFormulario();

  }

  criarFormulario(): void {
    this.formTarefa = this.formBuilder.group({
      nome: [ this.data.nome , Validators.required],
      descricao: [ this.data.descricao , Validators.required]
    });
  }

  fechar(): void {
    this.dialogRef.close();
  }

  salvar(): void {
    const tarefaEditada: Tarefa = {
      id: this.data.id,
      nome: this.formTarefa.controls['nome'].value,
      descricao: this.formTarefa.controls['descricao'].value,
      realizada: this.data.realizada
    }

    this.tarefaService.atualizarTarefa(tarefaEditada).pipe(
      tap(console.log),
      take(1)
    ).subscribe();

    if (this.formTarefa.dirty) {    // se o formulário foi alterado faça isso:
      this.dialogRef.close('editada');
    } else {
      this.dialogRef.close();
    }
  }

}