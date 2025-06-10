import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common';

import { TituloPrincipalComponent } from '../../componente/titulo-principal/titulo-principal.component';
import { BarraDeProgressaoComponent } from '../../componente/barra-de-progressao/barra-de-progressao.component';

@Component({
  selector: 'app-contato-e-consentimento',
  imports: [TituloPrincipalComponent, BarraDeProgressaoComponent, RouterModule, FormsModule, CheckboxModule, CommonModule],
  templateUrl: './contato-e-consentimento.component.html',
  styleUrl: './contato-e-consentimento.component.css'
})
export class ContatoEConsentimentoComponent {
  urlDeRetornoValor: string = '/cadastro-de-relato'; 
  urlDeProximoValor: string = '/relato-enviado';
  
  conteudoTitulo: string = 'Contato e Consentimento';
  conteudoDescricao: string = 'Preencha as informações abaixo para relatar uma suspeita de fraude. Seus dados serão tratados com sigilo e utilizados apenas para análise do relato.';

  mostrarModal: boolean = false;

  autorizaRelato: boolean = false;
  concordaPrivacidade: boolean = false;
  todosConsentimentos: boolean = false;

  constructor(private router: Router) {}

  abrirModal() {
    this.mostrarModal = true;
  }

  verificarConsentimentos() {
    this.todosConsentimentos = this.autorizaRelato && this.concordaPrivacidade;
  }

  verificarEProsseguir() {
    if (!this.todosConsentimentos) {
        this.mostrarModal = true;
        return;
    }
    
    this.router.navigate([this.urlDeProximoValor]);
  }

  fecharModal() {
    this.mostrarModal = false;
  }
}
