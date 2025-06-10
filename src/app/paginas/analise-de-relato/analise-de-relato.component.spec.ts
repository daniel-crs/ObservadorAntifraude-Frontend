import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaliseDeRelatoComponent } from './analise-de-relato.component';

describe('AnaliseDeRelatoComponent', () => {
  let component: AnaliseDeRelatoComponent;
  let fixture: ComponentFixture<AnaliseDeRelatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnaliseDeRelatoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnaliseDeRelatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
