import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-barra-de-progressao',
  imports: [],
  templateUrl: './barra-de-progressao.component.html',
  styleUrl: './barra-de-progressao.component.css'
})
export class BarraDeProgressaoComponent {
  @Input() etapaAtual: number = 1;
}
