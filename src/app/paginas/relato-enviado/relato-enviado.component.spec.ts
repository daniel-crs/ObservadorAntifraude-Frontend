import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatoEnviadoComponent } from './relato-enviado.component';

describe('RelatoEnviadoComponent', () => {
  let component: RelatoEnviadoComponent;
  let fixture: ComponentFixture<RelatoEnviadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatoEnviadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatoEnviadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
