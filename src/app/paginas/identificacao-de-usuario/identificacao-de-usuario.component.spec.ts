import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificacaoDeUsuarioComponent } from './identificacao-de-usuario.component';

describe('IdentificacaoDeUsuarioComponent', () => {
  let component: IdentificacaoDeUsuarioComponent;
  let fixture: ComponentFixture<IdentificacaoDeUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdentificacaoDeUsuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdentificacaoDeUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
