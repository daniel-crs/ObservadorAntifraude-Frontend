import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamposCidadeEstadoComponent } from './campos-cidade-estado.component';

describe('CamposCidadeEstadoComponent', () => {
  let component: CamposCidadeEstadoComponent;
  let fixture: ComponentFixture<CamposCidadeEstadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CamposCidadeEstadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CamposCidadeEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
