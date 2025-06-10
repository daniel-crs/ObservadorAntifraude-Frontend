import { Component } from '@angular/core';

import { TituloPrincipalComponent } from '../../componente/titulo-principal/titulo-principal.component';
import { BarraDeProgressaoComponent } from '../../componente/barra-de-progressao/barra-de-progressao.component';
import { FormularioComponent } from './componente/formulario/formulario.component';
import { SistemaRelacionadoComponent } from './componente/sistema-relacionado/sistema-relacionado.component';
import { CampoCienciaRelatoComponent } from './componente/campo-ciencia-relato/campo-ciencia-relato.component';
import { BotoesDeNavegacaoComponent } from '../../componente/botoes-de-navegacao/botoes-de-navegacao.component';

@Component({
  selector: 'app-cadastro-de-relato',
  imports: [TituloPrincipalComponent, BarraDeProgressaoComponent, FormularioComponent, SistemaRelacionadoComponent, CampoCienciaRelatoComponent, BotoesDeNavegacaoComponent],
  templateUrl: './cadastro-de-relato.component.html',
  styleUrl: './cadastro-de-relato.component.css'
})

export class CadastroDeRelatoComponent {
  urlDeRetornoValor: string = '/identificacao-de-usurio'; 
  urlDeProximoValor: string = '/contato-e-consentimento';
  
  conteudoTitulo: string = 'Cadastro de novo relato';
  conteudoDescricao: string = 'Preencha as informações abaixo para relatar uma  suspeita de fraude. Seus dados serão tratados com sigilo e utilizados apenas para análise do relato.';
}
