import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Tarefa } from 'src/app/models/tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  private api: string = `${environment.restUrl}/tarefa`;

  constructor( private httpClient: HttpClient ) { }

  getTarefas(): Observable<Tarefa[]> {
    return this.httpClient.get<Tarefa[]>(this.api);
  }

  adicionarTarefa(tarefa: Tarefa): Observable<Tarefa> {
    return this.httpClient.post<Tarefa>(this.api, tarefa);
  }

  atualizarTarefa(tarefa: Tarefa): Observable<Tarefa> {
    return this.httpClient.put<Tarefa>(this.api, tarefa);
  }

  excluirTarefa(idTarefa: number): Observable<Tarefa> {
    return this.httpClient.delete<Tarefa>(`${this.api}/${idTarefa}`);
  }

}