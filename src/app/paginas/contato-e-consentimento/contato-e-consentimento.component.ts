import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TituloPrincipalComponent } from '../../componente/titulo-principal/titulo-principal.component';
import { BarraDeProgressaoComponent } from '../../componente/barra-de-progressao/barra-de-progressao.component';

@Component({
  selector: 'app-contato-e-consentimento',
  imports: [TituloPrincipalComponent, BarraDeProgressaoComponent, RouterModule],
  templateUrl: './contato-e-consentimento.component.html',
  styleUrl: './contato-e-consentimento.component.css'
})
export class ContatoEConsentimentoComponent {
  urlDeRetornoValor: string = '/identificacao-de-usurio'; 
  urlDeProximoValor: string = '';
  
  conteudoTitulo: string = 'Contato e Consentimento';
  conteudoDescricao: string = ' Preencha as informações abaixo para relatar uma suspeita de fraude. Seus dados serão tratados com sigilo e utilizados apenas para análise do relato.';

  categoria = [
    { id: 1, texto: 'Ao enviar este formulário, em caso de fraude comprovada, autorizo o encaminhamento de relato para as autoridades competentes.', checked: false },
    { id: 2, texto: 'Ao enviar este relato, concordo com o uso das informações conforme o Aviso de Privacidade.', checked: false }
  ];

  algumaNaoMarcada: boolean = true;

  verificarConsentimento() {
    this.algumaNaoMarcada = this.categoria.some(item => !item.checked);
  }
}
