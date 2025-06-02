import { Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './paginas/pagina-principal/pagina-principal.component';
import { IdentificacaoDeUsuarioComponent } from './paginas/identificacao-de-usuario/identificacao-de-usuario.component';

export const routes: Routes = [
    {
        path: '',
        component: PaginaPrincipalComponent,
        title: 'Página Principal',
    },
    {
        path: 'identificacao-de-usurio',
        component: IdentificacaoDeUsuarioComponent,
        title: 'Página de identificação do usuário',
    },
];
