import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoesPrincipaisComponent } from './botoes-principais.component';

describe('BotoesPrincipaisComponent', () => {
  let component: BotoesPrincipaisComponent;
  let fixture: ComponentFixture<BotoesPrincipaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotoesPrincipaisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotoesPrincipaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
