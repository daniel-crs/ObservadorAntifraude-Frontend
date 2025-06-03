import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-de-usuario',
  imports: [],
  templateUrl: './formulario-de-usuario.component.html',
  styleUrl: './formulario-de-usuario.component.css'
})
export class FormularioDeUsuarioComponent {
  nome: string = '';
  cpf: string = '';
  email: string = '';
  telefone: string = '';
  cep: string = '';
  cidade: string = '';
  estado: string = '';
  dados: { nome: string; cpf: string; email: string; telefone: string; cep: string; cidade: string; estado: string; } | null = null;

  enviarFormulario() {
    if (!this.nome || !this.cpf) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
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
