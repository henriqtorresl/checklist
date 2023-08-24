import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTarefaDialogComponent } from './editar-tarefa-dialog.component';

describe('EditarTarefaDialogComponent', () => {
  let component: EditarTarefaDialogComponent;
  let fixture: ComponentFixture<EditarTarefaDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarTarefaDialogComponent]
    });
    fixture = TestBed.createComponent(EditarTarefaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
