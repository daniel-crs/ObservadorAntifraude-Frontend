import { Component, Input, Output, EventEmitter } from '@angular/core';

import { CamposCidadeEstadoComponent } from '../campos-cidade-estado/campos-cidade-estado.component';

@Component({
  selector: 'app-campos-dados-de-usuario',
  imports: [CamposCidadeEstadoComponent],
  templateUrl: './campos-dados-de-usuario.component.html',
  styleUrl: './campos-dados-de-usuario.component.css'
})
export class CamposDadosDeUsuarioComponent {
  @Input() nome: string = '';
  @Input() cpf: string = '';
  @Input() email: string = '';
  @Input() telefone: string = '';
  @Input() cep: string = '';
  @Input() cidade: string = '';
  @Input() estado: string = '';


  @Output() nomeChange = new EventEmitter<string>();
  @Output() cpfChange = new EventEmitter<string>();
  @Output() emailChange = new EventEmitter<string>();
  @Output() telefoneChange = new EventEmitter<string>();
  @Output() cepChange = new EventEmitter<string>();
  @Output() cidadeChange = new EventEmitter<string>();
  @Output() estadoChange = new EventEmitter<string>();

  onNomeChange(value: string) {
    this.nome = value;
    this.nomeChange.emit(value);
  }

  onCpfChange(value: string) {
    this.cpf = value;
    this.cpfChange.emit(value);
  }

  onEmailChange(value: string) {
    this.email = value;
    this.emailChange.emit(value);
  }

  onTelefoneChange(value: string) {
    this.telefone = value;
    this.telefoneChange.emit(value);
  }

  onCepChange(value: string) {
    this.cep = value;
    this.cepChange.emit(value);
  }

  onCidadeChange(value: string) {
    this.cidade = value;
    this.cidadeChange.emit(value);
  }

  onEstadoChange(value: string) {
    this.estado = value;
    this.estadoChange.emit(value);
  }
}
