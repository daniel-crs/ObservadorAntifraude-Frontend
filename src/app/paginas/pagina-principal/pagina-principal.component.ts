import { Component } from '@angular/core';

import { TituloPrincipalComponent } from '../../componente/titulo-principal/titulo-principal.component';

@Component({
  selector: 'app-pagina-principal',
  imports: [ TituloPrincipalComponent ],
  templateUrl: './pagina-principal.component.html',
  styleUrl: './pagina-principal.component.css'
})
export class PaginaPrincipalComponent {

  listagemDeBotoes = [
    {
      titulo: 'Gerenciar Usuários',
      rota: '',
      icone: 'icons/alerta.svg'
    },
    {
      titulo: 'Gerenciar Usuários',
      rota: '',
      icone: 'icons/pesquisa-de-fraude.svg'
    }
  ]

}
