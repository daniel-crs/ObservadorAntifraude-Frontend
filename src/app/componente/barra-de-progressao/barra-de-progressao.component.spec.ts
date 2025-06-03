import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraDeProgressaoComponent } from './barra-de-progressao.component';

describe('BarraDeProgressaoComponent', () => {
  let component: BarraDeProgressaoComponent;
  let fixture: ComponentFixture<BarraDeProgressaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraDeProgressaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraDeProgressaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
