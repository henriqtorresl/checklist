import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarTarefaDialogComponent } from './adicionar-tarefa-dialog.component';

describe('AdicionarTarefaDialogComponent', () => {
  let component: AdicionarTarefaDialogComponent;
  let fixture: ComponentFixture<AdicionarTarefaDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdicionarTarefaDialogComponent]
    });
    fixture = TestBed.createComponent(AdicionarTarefaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
