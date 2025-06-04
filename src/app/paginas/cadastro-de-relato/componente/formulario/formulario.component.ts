import { Component } from '@angular/core';

import { DatePickerModule } from 'primeng/datepicker';

@Component({
  selector: 'app-formulario',
  imports: [DatePickerModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  opcoesFraude = [
    { nome: 'São Paulo' },
    { nome: 'São Paulo' },
    { nome: 'São Paulo' },
  ];
}
