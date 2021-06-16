import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TelaLoginComponent } from './components/tela-login/tela-login.component';
import { TelaCadastroComponent } from './components/tela-cadastro/tela-cadastro.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { SeguindoComponent } from './components/seguindo/seguindo.component';
import { MeuperfilComponent } from './components/meuperfil/meuperfil.component';
import { LeituraPageComponent } from './components/leitura-page/leitura-page.component';
import { CriacaoPostComponent } from './components/criacao-post/criacao-post.component';
import { ConfiguracaoComponent } from './components/configuracao/configuracao.component';

const routes: Routes = [
  { path: '', component: TelaLoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cadastro', component: TelaCadastroComponent },
  { path: 'favoritos', component: FavoritosComponent },
  { path: 'seguindo', component: SeguindoComponent },
  { path: 'meuperfil', component: MeuperfilComponent },
  { path: 'ler/:id', component: LeituraPageComponent },
  { path: 'criacao', component: CriacaoPostComponent },
  { path: 'config', component: ConfiguracaoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
