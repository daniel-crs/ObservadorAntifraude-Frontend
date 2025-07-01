import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private apiUrl = 'http://localhost:8080/usuario'

  constructor(private http:HttpClient) { }

  criarUsuario(dados: any): Observable<any> {
    return this.http.post(this.apiUrl, dados)
  }
}
