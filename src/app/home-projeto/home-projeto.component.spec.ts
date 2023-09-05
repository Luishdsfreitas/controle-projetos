import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProjetoComponent } from './home-projeto.component';

describe('HomeProjetoComponent', () => {
  let component: HomeProjetoComponent;
  let fixture: ComponentFixture<HomeProjetoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeProjetoComponent]
    });
    fixture = TestBed.createComponent(HomeProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
