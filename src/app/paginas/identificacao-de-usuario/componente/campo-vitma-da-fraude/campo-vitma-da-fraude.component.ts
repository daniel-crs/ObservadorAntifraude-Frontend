import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-campo-vitma-da-fraude',
  imports: [CommonModule],
  templateUrl: './campo-vitma-da-fraude.component.html',
  styleUrl: './campo-vitma-da-fraude.component.css'
})
export class CampoVitmaDaFraudeComponent {
  outrasVitimas: boolean = true;

  selecionarOutrasVitimas(valor: boolean) {
    this.outrasVitimas = valor;
  }

  maisDeUmaVitima = false;
  opcoes = [1, 2, 3, 4, 5];

  selecionarMaisDeUmaVitima(valor: boolean) {
    this.maisDeUmaVitima = valor;
  }

  @Input() isAnonimo: boolean = false;
}
