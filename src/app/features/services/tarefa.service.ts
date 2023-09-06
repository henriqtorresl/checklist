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
    return this.httpClient.put<Tarefa>(`${this.api}/${tarefa.id}` , tarefa);
  }

  excluirTarefa(tarefa: Tarefa): Observable<any> {
    return this.httpClient.delete<any>(`${this.api}/${tarefa.id}`);
  }

}