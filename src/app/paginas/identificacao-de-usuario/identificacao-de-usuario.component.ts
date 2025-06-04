import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TituloPrincipalComponent } from '../../componente/titulo-principal/titulo-principal.component';
import { BarraDeProgressaoComponent } from '../../componente/barra-de-progressao/barra-de-progressao.component';
import { FormularioComponent } from './componente/formulario/formulario.component';

@Component({
  selector: 'app-identificacao-de-usuario',
  imports: [CommonModule, TituloPrincipalComponent, BarraDeProgressaoComponent, FormularioComponent],
  templateUrl: './identificacao-de-usuario.component.html',
  styleUrl: './identificacao-de-usuario.component.css'
})
export class IdentificacaoDeUsuarioComponent {
  conteudoTitulo: string = 'Identificação do usuário';
  conteudoDescricao: string = 'Preencha as informações abaixo para relatar uma suspeita fraude. Seus dados serão tratados com sigilo e utilizados apenas para análise do relato.';

  anonimato: boolean = false;

  selecionarAnonimato(valor: boolean) {
    this.anonimato = valor;
  }
}