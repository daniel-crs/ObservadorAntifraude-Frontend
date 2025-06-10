import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-analise-de-relato',
  imports: [CommonModule, RouterModule],
  templateUrl: './analise-de-relato.component.html',
  styleUrl: './analise-de-relato.component.css'
})
export class AnaliseDeRelatoComponent {
    status: string = 'Apuração iniciada';
}
