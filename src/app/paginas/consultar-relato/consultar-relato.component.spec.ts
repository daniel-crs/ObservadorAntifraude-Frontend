import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarRelatoComponent } from './consultar-relato.component';

describe('ConsultarRelatoComponent', () => {
  let component: ConsultarRelatoComponent;
  let fixture: ComponentFixture<ConsultarRelatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarRelatoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarRelatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
