import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSenhaClienteComponent } from './editar-senha-cliente.component';

describe('EditarSenhaClienteComponent', () => {
  let component: EditarSenhaClienteComponent;
  let fixture: ComponentFixture<EditarSenhaClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarSenhaClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarSenhaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
