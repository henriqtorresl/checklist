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

}
