import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './types/usuario'

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private readonly API = 'http://localhost:8080/usuario'

  constructor(private http:HttpClient) { }

  incluir(usuario: Usuario) {
    return this.http.post<Usuario>(this.API, usuario)
  }
}
