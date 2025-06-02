import { Component } from '@angular/core';

import { TituloPrincipalComponent } from '../../componente/titulo-principal/titulo-principal.component';
import { BotoesPrincipaisComponent } from "../../componente/botoes-principais/botoes-principais.component";

@Component({
  selector: 'app-pagina-principal',
  imports: [TituloPrincipalComponent, BotoesPrincipaisComponent],
  templateUrl: './pagina-principal.component.html',
  styleUrl: './pagina-principal.component.css'
})
export class PaginaPrincipalComponent {
  conteudoTitulo: string = 'Observador Antifraude';
  conteudoDescricao: string = 'Portal Oficial de Relatos de Fraudes Cibernéticas: por esse sistema, é possível relatar suspeitas de fraudes cibernéticas relacionadas às soluções digitais do SERPRO.';
}
