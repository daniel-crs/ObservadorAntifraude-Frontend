import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule, DatePicker],
  templateUrl: './formulario.component.html',
  styleUrls: [ './formulario.component.css' ],
    host: {
    "(window:resize)":"onWindowResize($event)"
  }
})
export class FormularioComponent {
  opcoesFraude = [
    { nome: 'São Paulo' },
    { nome: 'São Paulo' },
    { nome: 'São Paulo' },
  ];

  date: Date | undefined;

  window = window;
}
