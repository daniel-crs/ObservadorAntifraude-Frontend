import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-campos-cidade-estado',
  imports: [],
  templateUrl: './campos-cidade-estado.component.html',
  styleUrl: './campos-cidade-estado.component.css'
})
export class CamposCidadeEstadoComponent {
  @Input() selecaoCidade: string = '';
  @Input() selecaoEstado: string = '';

  opcoesCidades = [
    { nome: 'São Paulo', valor: 'São Paulo' },
    { nome: 'Rio de Janeiro', valor: 'Rio de Janeiro' },
    { nome: 'Belo Horizonte', valor: 'Belo Horizonte' },
  ];

  opcoesEstados = [
    { nome: 'SP', sigla: 'SP' },
    { nome: 'RJ', sigla: 'RJ' },
    { nome: 'MG', sigla: 'MG' },
  ];

}
