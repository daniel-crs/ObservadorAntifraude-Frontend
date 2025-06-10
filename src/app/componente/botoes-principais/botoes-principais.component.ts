import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-botoes-principais',
  imports: [RouterModule],
  templateUrl: './botoes-principais.component.html',
  styleUrl: './botoes-principais.component.css'
})
export class BotoesPrincipaisComponent {

  listagemDeBotoes = [
    {
      titulo: 'RELATAR FRAUDE',
      rota: '/identificacao-de-usurio',
      icone: 'icons/alerta.svg'
    },
    {
      titulo: 'CONSULTAR RELATO',
      rota: '/consultar-relato',
      icone: 'icons/pesquisa-de-fraude.svg'
    }
  ]

}
