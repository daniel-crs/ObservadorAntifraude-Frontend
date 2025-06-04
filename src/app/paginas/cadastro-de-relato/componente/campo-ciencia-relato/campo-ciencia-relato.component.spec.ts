import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoCienciaRelatoComponent } from './campo-ciencia-relato.component';

describe('CampoCienciaRelatoComponent', () => {
  let component: CampoCienciaRelatoComponent;
  let fixture: ComponentFixture<CampoCienciaRelatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampoCienciaRelatoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampoCienciaRelatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
