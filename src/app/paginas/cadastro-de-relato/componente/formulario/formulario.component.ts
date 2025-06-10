import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule, DatePicker],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  opcoesFraude = [
    { nome: 'São Paulo' },
    { nome: 'São Paulo' },
    { nome: 'São Paulo' },
  ];

  date: Date | undefined;
}
