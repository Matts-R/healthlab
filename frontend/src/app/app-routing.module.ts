import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
<<<<<<< HEAD
import { TelaLoginComponent } from './components/tela-login/tela-login.component';
import { TelaCadastroComponent } from './components/tela-cadastro/tela-cadastro.component';
=======
import { FavoritosComponent } from './components/favoritos/favoritos.component';
>>>>>>> 132fe27da22e1a9a5f47259225cb9a9f4876d244

const routes: Routes = [
  { path: '', component: NavBarComponent },
  { path: 'home', component: HomeComponent },
<<<<<<< HEAD
  { path: 'login', component: TelaLoginComponent },
  { path: 'cadastro', component: TelaCadastroComponent }
=======
  { path: 'favoritos', component: FavoritosComponent}
>>>>>>> 132fe27da22e1a9a5f47259225cb9a9f4876d244
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
