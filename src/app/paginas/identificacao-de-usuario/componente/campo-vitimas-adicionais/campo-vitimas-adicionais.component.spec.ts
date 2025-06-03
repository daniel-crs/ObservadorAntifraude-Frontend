import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoVitimasAdicionaisComponent } from './campo-vitimas-adicionais.component';

describe('CampoVitimasAdicionaisComponent', () => {
  let component: CampoVitimasAdicionaisComponent;
  let fixture: ComponentFixture<CampoVitimasAdicionaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampoVitimasAdicionaisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampoVitimasAdicionaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
