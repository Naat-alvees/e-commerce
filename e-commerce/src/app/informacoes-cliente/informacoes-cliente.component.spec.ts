import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacoesClienteComponent } from './informacoes-cliente.component';

describe('InformacoesClienteComponent', () => {
  let component: InformacoesClienteComponent;
  let fixture: ComponentFixture<InformacoesClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacoesClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacoesClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
