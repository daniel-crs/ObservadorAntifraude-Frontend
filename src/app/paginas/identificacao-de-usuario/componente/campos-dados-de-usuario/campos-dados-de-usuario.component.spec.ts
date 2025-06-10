import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamposDadosDeUsuarioComponent } from './campos-dados-de-usuario.component';

describe('CamposDadosDeUsuarioComponent', () => {
  let component: CamposDadosDeUsuarioComponent;
  let fixture: ComponentFixture<CamposDadosDeUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CamposDadosDeUsuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CamposDadosDeUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
