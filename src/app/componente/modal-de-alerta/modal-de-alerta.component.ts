import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-de-alerta',
  imports: [],
  templateUrl: './modal-de-alerta.component.html',
  styleUrl: './modal-de-alerta.component.css'
})
export class ModalDeAlertaComponent {
  mostrarAlerta(arg0: { titulo: string; mensagem: string; botao: string; }) {
    throw new Error('Method not implemented.');
  }
  @Input() mostrarModal: boolean = false;
  @Input() fecharModal: () => void = () => {};
}
