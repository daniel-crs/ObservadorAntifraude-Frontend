import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-sistema-relacionado',
  imports: [CommonModule, ConfirmPopupModule, ToastModule, ButtonModule],
  templateUrl: './sistema-relacionado.component.html',
  styleUrl: './sistema-relacionado.component.css',
  providers: [ConfirmationService, MessageService]
})
export class SistemaRelacionadoComponent {
  sistemas = [
    {id: 1, titulo: 'Gov.br'},
    {id: 2, titulo: 'Radar'},
    {id: 3, titulo: 'Certificado Digital'},
    {id: 99, titulo: 'Não se encontra na lista'},
  ];
  sistemaSelecionado: number = 0;

  selecionarSistema(index: number) {
    this.sistemaSelecionado = index;
  }

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}

  confirm(event: Event) {
      this.confirmationService.confirm({
          target: event.target as EventTarget,
          message: 'Save your current process?',
          accept: () => {
              this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
          },
          reject: () => {
              this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
          }
      });
  }

  descricaoRelato: string = '';
  caracteresDigitados: number = 0;

  onDescricaoChange(texto: string) {
    this.caracteresDigitados = texto.length;
  }

  salvarDescricao() {
    if (this.caracteresDigitados >= 100) {
      console.log('Descrição salva:', this.descricaoRelato);
    }
  }
}
