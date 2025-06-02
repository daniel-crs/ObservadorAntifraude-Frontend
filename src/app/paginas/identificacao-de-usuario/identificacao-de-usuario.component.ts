import { Component } from '@angular/core';

import { TituloPrincipalComponent } from '../../componente/titulo-principal/titulo-principal.component';

@Component({
  selector: 'app-identificacao-de-usuario',
  imports: [TituloPrincipalComponent],
  templateUrl: './identificacao-de-usuario.component.html',
  styleUrl: './identificacao-de-usuario.component.css'
})
export class IdentificacaoDeUsuarioComponent {
  conteudoTitulo: string = 'Identificação do usuário';
  conteudoDescricao: string = 'Preencha as informações abaixo para relatar uma suspeita fraude. Seus dados serão tratados com sigilo e utilizados apenas para análise do relato.';
}
