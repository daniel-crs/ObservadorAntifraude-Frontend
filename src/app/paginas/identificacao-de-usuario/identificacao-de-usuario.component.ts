import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AnonimoService } from '../../service/data-anonimo.service';
import { UsuariosService } from '../../service/usuarios.service';
import { HttpClientModule } from '@angular/common/http';

import { TituloPrincipalComponent } from '../../componente/titulo-principal/titulo-principal.component';
import { BarraDeProgressaoComponent } from '../../componente/barra-de-progressao/barra-de-progressao.component';
import { CamposDadosDeUsuarioComponent } from './componente/campos-dados-de-usuario/campos-dados-de-usuario.component';
import { CamposCidadeEstadoComponent } from './componente/campos-cidade-estado/campos-cidade-estado.component';
import { CampoVitmaDaFraudeComponent } from './componente/campo-vitma-da-fraude/campo-vitma-da-fraude.component';

@Component({
  selector: 'app-identificacao-de-usuario',
  imports: [
    CommonModule, 
    TituloPrincipalComponent, 
    BarraDeProgressaoComponent,
    CamposDadosDeUsuarioComponent, 
    CamposCidadeEstadoComponent,
    CampoVitmaDaFraudeComponent,
    RouterModule,
    HttpClientModule
  ],
  templateUrl: './identificacao-de-usuario.component.html',
  styleUrl: './identificacao-de-usuario.component.css'
})
export class IdentificacaoDeUsuarioComponent {
  conteudoTitulo: string = 'Identificação do usuário';
  conteudoDescricao: string = 'Preencha as informações abaixo para relatar uma suspeita fraude. Seus dados serão tratados com sigilo e utilizados apenas para análise do relato.';

  urlDeRetornoValor: string = ''; 
  urlDeProximoValor: string = '/cadastro-de-relato';

  nome = '';
  cpf = '';
  email = '';
  telefone = '';
  cep = '';
  cidade = '';
  estado = '';
  anonimo = false;

  constructor(private usuariosService: UsuariosService, private anonimoService: AnonimoService, private router: Router) {}

  getAnonimo() {
    this.anonimoService.getAnonimo().subscribe(valor => {
      this.anonimo = valor;
    });
    return this.anonimo;
  }

  enviarFormulario() {
    const dados = {
      anonimo: this.getAnonimo(),
      nome: this.nome,
      cpf: this.cpf,
      email: this.email,
      telefone: this.telefone,
      cep: this.cep,
      cidade: this.cidade,
      estado: this.estado,
      ativo: true
    };

    this.usuariosService.criarUsuario(dados).subscribe({
    next: () => {
      setTimeout(() => this.router.navigate([this.urlDeProximoValor]), 1500);
    },
    error: () => {
      console.error('Erro ao enviar os dados do usuário');
    }
  });
  }

  mostrarModal: boolean = false;

  selecionarAnonimato(valor: boolean) {
      if (valor) {
          this.mostrarModal = true;
      }
      this.anonimoService.setAnonimo(valor);
  }

  fecharModal() {
      this.mostrarModal = false;
  }

  isVitimaFraude: boolean = false;
  outrasVitimas: boolean = false;
  quantidadeVitimas: number = 1;

  selecionarVitimaFraude(valor: boolean) {
      this.isVitimaFraude = valor;
  }

  selecionarOutrasVitimas(valor: boolean) {
      this.outrasVitimas = valor;
      if (!valor) {
          this.quantidadeVitimas = 1;
      }
  }
}
