import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoesDeNavegacaoComponent } from './botoes-de-navegacao.component';

describe('BotoesDeNavegacaoComponent', () => {
  let component: BotoesDeNavegacaoComponent;
  let fixture: ComponentFixture<BotoesDeNavegacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotoesDeNavegacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotoesDeNavegacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
