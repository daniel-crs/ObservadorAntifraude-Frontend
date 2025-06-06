import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnonimoService {
  private anonimo = new BehaviorSubject<boolean>(false);
  anonimo$ = this.anonimo.asObservable();

  setAnonimo(valor: boolean): void {
    this.anonimo.next(valor);
  }

  getAnonimo(): Observable<boolean> {
    return this.anonimo$;
  }
}