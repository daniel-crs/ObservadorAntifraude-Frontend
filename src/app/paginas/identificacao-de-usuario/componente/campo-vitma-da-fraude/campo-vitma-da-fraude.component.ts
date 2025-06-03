import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampoVitimasAdicionaisComponent } from '../campo-vitimas-adicionais/campo-vitimas-adicionais.component';

@Component({
  selector: 'app-campo-vitma-da-fraude',
  imports: [CommonModule, CampoVitimasAdicionaisComponent],
  templateUrl: './campo-vitma-da-fraude.component.html',
  styleUrl: './campo-vitma-da-fraude.component.css'
})
export class CampoVitmaDaFraudeComponent {
  outrasVitimas: boolean = true;

  selecionarOutrasVitimas(valor: boolean) {
    this.outrasVitimas = valor;
  }
}
