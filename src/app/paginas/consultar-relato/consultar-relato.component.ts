import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultar-relato',
  imports: [RouterModule, FormsModule],
  templateUrl: './consultar-relato.component.html',
  styleUrl: './consultar-relato.component.css'
})
export class ConsultarRelatoComponent {
  codigoRelato: string = '';

  constructor(private router: Router) {}

  consultarRelato() {
    if (this.codigoRelato && this.codigoRelato.trim()) {
      this.router.navigate(['/analise-de-relato', this.codigoRelato]);
    }
  }
}
