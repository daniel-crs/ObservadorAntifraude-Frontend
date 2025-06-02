import { Component } from '@angular/core';

@Component({
  selector: 'app-botoes-principais',
  imports: [],
  templateUrl: './botoes-principais.component.html',
  styleUrl: './botoes-principais.component.css'
})
export class BotoesPrincipaisComponent {

  listagemDeBotoes = [
    {
      titulo: 'RELATAR FRAUDE',
      rota: '',
      icone: 'icons/alerta.svg'
    },
    {
      titulo: 'CONSULTAR RELATO',
      rota: '',
      icone: 'icons/pesquisa-de-fraude.svg'
    }
  ]

}
