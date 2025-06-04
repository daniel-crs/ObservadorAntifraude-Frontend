import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDeRelatoComponent } from './cadastro-de-relato.component';

describe('CadastroDeRelatoComponent', () => {
  let component: CadastroDeRelatoComponent;
  let fixture: ComponentFixture<CadastroDeRelatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroDeRelatoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroDeRelatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
