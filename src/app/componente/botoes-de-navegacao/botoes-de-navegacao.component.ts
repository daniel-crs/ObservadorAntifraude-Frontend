import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-botoes-de-navegacao',
  imports: [RouterModule],
  templateUrl: './botoes-de-navegacao.component.html',
  styleUrl: './botoes-de-navegacao.component.css'
})
export class BotoesDeNavegacaoComponent {
  @Input() urlDeRetorno: string = '';
  @Input() urlDeProximo: string = '';
}
