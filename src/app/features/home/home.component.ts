import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../services/tarefa.service';
import { catchError, finalize, take, tap } from 'rxjs';
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
        // Lógica para lidar com os dados recebidos
        this.tarefas = tarefas;
        console.log(this.tarefas);
      }),
      catchError((error) => {
        // Lógica para lidar com erros
        throw new Error('Não foi possível trazer as tarefas');
      }),
      finalize(() => {
        // Lógica para lidar com a conclusão do observable
        take(1); // se desinscreve do observable 
      })
    ).subscribe();
  }

}
