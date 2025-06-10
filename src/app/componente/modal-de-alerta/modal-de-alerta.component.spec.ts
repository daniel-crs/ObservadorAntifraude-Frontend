import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeAlertaComponent } from './modal-de-alerta.component';

describe('ModalDeAlertaComponent', () => {
  let component: ModalDeAlertaComponent;
  let fixture: ComponentFixture<ModalDeAlertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalDeAlertaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDeAlertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
