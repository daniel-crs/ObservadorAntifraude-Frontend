import { Component } from '@angular/core';

import { CamposCidadeEstadoComponent } from "../campos-cidade-estado/campos-cidade-estado.component";

@Component({
  selector: 'app-formulario',
  imports: [CamposCidadeEstadoComponent],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  nome: string = '';
  cpf: string = '';
  email: string = '';
  telefone: string = '';
  cep: string = '';
  cidade: string = '';
  estado: string = '';
  
  dados: { nome: string; cpf: string; email: string; telefone: string; cep: string; cidade: string; estado: string; } | null = null;

  enviarFormulario() {
    this.dados = {
      nome: this.nome,
      cpf: this.cpf,
      email: this.email,
      telefone: this.telefone,
      cep: this.cep,
      cidade: this.cidade,
      estado: this.estado
    };
    console.log(this.dados);
  }
}
