import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarTarefaDialogComponent } from './deletar-tarefa-dialog.component';

describe('DeletarTarefaDialogComponent', () => {
  let component: DeletarTarefaDialogComponent;
  let fixture: ComponentFixture<DeletarTarefaDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletarTarefaDialogComponent]
    });
    fixture = TestBed.createComponent(DeletarTarefaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
