import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoEConsentimentoComponent } from './contato-e-consentimento.component';

describe('ContatoEConsentimentoComponent', () => {
  let component: ContatoEConsentimentoComponent;
  let fixture: ComponentFixture<ContatoEConsentimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContatoEConsentimentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContatoEConsentimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
