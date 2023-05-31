import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {
  listaDeTarefas: string[] = ['Estudar', 'Cagar'];

  // injeção de depndências
  constructor() {}

  ngOnInit(): void {
    
  }

  removerDaLista(tarefa: string) {
    this.listaDeTarefas.splice(this.listaDeTarefas.indexOf(tarefa), 1);   // remove 1 item a partir da posição da 'tarefa', ou seja, vai remover apenas a tarefa
  }

}
