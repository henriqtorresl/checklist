import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../services/tarefa.service';
import { take, tap } from 'rxjs';
import { Tarefa } from 'src/app/models/tarefa.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tarefas!: Tarefa[];

  constructor(
    private tarefaService: TarefaService
  ) {}

  ngOnInit(): void {
    this.tarefaService.getTarefas().pipe(
      tap( (tarefas) =>  {
        this.tarefas = tarefas;
        console.log(this.tarefas);
      }),
      take(1)
    ).subscribe();
  }

}
