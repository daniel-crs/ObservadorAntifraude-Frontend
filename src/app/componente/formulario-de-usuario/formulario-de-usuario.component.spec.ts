import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDeUsuarioComponent } from './formulario-de-usuario.component';

describe('FormularioDeUsuarioComponent', () => {
  let component: FormularioDeUsuarioComponent;
  let fixture: ComponentFixture<FormularioDeUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioDeUsuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioDeUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
