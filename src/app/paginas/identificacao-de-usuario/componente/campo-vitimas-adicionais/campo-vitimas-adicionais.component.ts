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
  quantidadeVitimas = 1;
  vitimas: { id: number; cpf: string }[] = [{ id: 1, cpf: '' }];

  selecionarMaisDeUmaVitima(valor: boolean) {
    this.maisDeUmaVitima = valor;
    if (!valor) {
      this.quantidadeVitimas = 1;
      this.vitimas = [{ id: 1, cpf: '' }];
    }
  }
}
