import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TelaLoginComponent } from './components/tela-login/tela-login.component';
import { TelaCadastroComponent } from './components/tela-cadastro/tela-cadastro.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { SeguindoComponent } from './components/seguindo/seguindo.component';
import { MeuperfilComponent } from './components/meuperfil/meuperfil.component';


const routes: Routes = [
  { path: '', component: NavBarComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: TelaLoginComponent },
  { path: 'cadastro', component: TelaCadastroComponent },
  { path: 'favoritos', component: FavoritosComponent},
  { path: 'seguindo', component: SeguindoComponent},
  { path: 'meuperfil', component: MeuperfilComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
