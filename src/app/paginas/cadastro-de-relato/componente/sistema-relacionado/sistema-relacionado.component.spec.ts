import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaRelacionadoComponent } from './sistema-relacionado.component';

describe('SistemaRelacionadoComponent', () => {
  let component: SistemaRelacionadoComponent;
  let fixture: ComponentFixture<SistemaRelacionadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SistemaRelacionadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SistemaRelacionadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
