import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-campo-ciencia-relato',
  imports: [CommonModule],
  templateUrl: './campo-ciencia-relato.component.html',
  styleUrl: './campo-ciencia-relato.component.css'
})
export class CampoCienciaRelatoComponent {
  contatos = [
    {id: 1, titulo: 'E-mail'},
    {id: 2, titulo: 'Telefonema'},
    {id: 3, titulo: 'Gov.br'},
    {id: 4, titulo: 'SMS'},
    {id: 99, titulo: 'Outro'},
  ];
  contatoSelecionado: number = 0;

  contatosSistema(index: number) {
    this.contatoSelecionado = index;
  }
}
