import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

import { TituloPrincipalComponent } from '../../componente/titulo-principal/titulo-principal.component';
import { BotoesPrincipaisComponent } from '../../componente/botoes-principais/botoes-principais.component';

@Component({
  selector: 'app-relato-enviado',
  imports: [ToastModule, TituloPrincipalComponent, BotoesPrincipaisComponent],
  providers: [MessageService],
  templateUrl: './relato-enviado.component.html',
  styleUrl: './relato-enviado.component.css'
})
export class RelatoEnviadoComponent {
  conteudoTitulo: string = 'Seu Relato foi enviado!';
  conteudoDescricao: string = 'Seu relato foi encaminhado para análise com o seguinte código:';

  constructor(private messageService: MessageService) {}

  copiarCodigo(codigo: string) {
    navigator.clipboard.writeText(codigo)
      .then(() => {
        this.messageService.add({
          severity: 'success',
          summary: 'Sucesso',
          detail: 'Código copiado para área de transferência!'
        });
      })
      .catch(err => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Não foi possível copiar o código'
        });
        console.error('Erro ao copiar código:', err);
      });
  }
}
