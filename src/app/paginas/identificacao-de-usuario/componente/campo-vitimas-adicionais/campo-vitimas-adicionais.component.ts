import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-campo-vitimas-adicionais',
  imports: [CommonModule],
  templateUrl: './campo-vitimas-adicionais.component.html',
  styleUrl: './campo-vitimas-adicionais.component.css'
})
export class CampoVitimasAdicionaisComponent {
  maisDeUmaVitima = false;
  opcoes = [1, 2, 3, 4, 5];

  selecionarMaisDeUmaVitima(valor: boolean) {
    this.maisDeUmaVitima = valor;
  }
}
