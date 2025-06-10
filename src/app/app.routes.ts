import { Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './paginas/pagina-principal/pagina-principal.component';
import { IdentificacaoDeUsuarioComponent } from './paginas/identificacao-de-usuario/identificacao-de-usuario.component';
import { CadastroDeRelatoComponent } from './paginas/cadastro-de-relato/cadastro-de-relato.component';
import { ContatoEConsentimentoComponent } from './paginas/contato-e-consentimento/contato-e-consentimento.component';
import { RelatoEnviadoComponent } from './paginas/relato-enviado/relato-enviado.component';
import { ConsultarRelatoComponent } from './paginas/consultar-relato/consultar-relato.component';
import { AnaliseDeRelatoComponent } from './paginas/analise-de-relato/analise-de-relato.component';

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
    {
        path: 'cadastro-de-relato',
        component: CadastroDeRelatoComponent,
        title: 'Página de cadastro de relato',
    },
    {
        path: 'contato-e-consentimento',
        component: ContatoEConsentimentoComponent,
        title: 'Página de contato e consentimento',
    },
    {
        path: 'relato-enviado',
        component: RelatoEnviadoComponent,
        title: 'Página de envio de relato',
    },
    {
        path: 'consultar-relato',
        component: ConsultarRelatoComponent,
        title: 'Página de consulta de relato',
    },
    {
        path: 'analise-de-relato/:id',
        component: AnaliseDeRelatoComponent,
        title: 'Página de Análise de Relato',
    },
];
