import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheProjetoComponent } from './detalhe-projeto.component';

describe('DetalheProjetoComponent', () => {
  let component: DetalheProjetoComponent;
  let fixture: ComponentFixture<DetalheProjetoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalheProjetoComponent]
    });
    fixture = TestBed.createComponent(DetalheProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
