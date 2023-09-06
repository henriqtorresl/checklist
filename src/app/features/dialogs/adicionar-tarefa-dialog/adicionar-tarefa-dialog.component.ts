import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Tarefa } from 'src/app/models/tarefa.model';
import { TarefaService } from '../../services/tarefa.service';
import { take, tap } from 'rxjs';

@Component({
  selector: 'app-adicionar-tarefa-dialog',
  templateUrl: './adicionar-tarefa-dialog.component.html',
  styleUrls: ['./adicionar-tarefa-dialog.component.scss']
})
export class AdicionarTarefaDialogComponent implements OnInit {

  formTarefa!: FormGroup

  constructor(
    private dialogRef: MatDialogRef<AdicionarTarefaDialogComponent>,
    private formBuilder: FormBuilder,
    private tarefaService: TarefaService
  ) {}

  ngOnInit(): void {

    this.criarFormulario();

  }

  criarFormulario(): void {
    this.formTarefa = this.formBuilder.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required]
    });
  }

  fechar(): void {
    this.dialogRef.close();
  }

  salvar(): void {
    const novaTarefa: Tarefa = {
      nome: this.formTarefa.controls['nome'].value,
      descricao: this.formTarefa.controls['descricao'].value,
      realizada: false    // toda tarefa adicionada tem que vir com esse campo == false
    }

    console.log('Nova tarefa: ', novaTarefa);

    this.tarefaService.adicionarTarefa(novaTarefa).pipe(
      take(1),
      tap((tarefa) => {
        console.log(tarefa);
        this.dialogRef.close(tarefa);
      })
    ).subscribe();
  }

  desabilitar(): boolean {
    if (
      this.formTarefa.controls['nome'].value != '' &&
      this.formTarefa.controls['descricao'].value != ''
    ) {
      return false;   
    } else {
      return true;
    }
  }

}