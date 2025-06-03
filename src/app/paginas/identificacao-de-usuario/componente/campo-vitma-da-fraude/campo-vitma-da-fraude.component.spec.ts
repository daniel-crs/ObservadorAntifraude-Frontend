import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoVitmaDaFraudeComponent } from './campo-vitma-da-fraude.component';

describe('CampoVitmaDaFraudeComponent', () => {
  let component: CampoVitmaDaFraudeComponent;
  let fixture: ComponentFixture<CampoVitmaDaFraudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampoVitmaDaFraudeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampoVitmaDaFraudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
