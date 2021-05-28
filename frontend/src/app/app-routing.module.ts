import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { SeguindoComponent } from './components/seguindo/seguindo.component';

const routes: Routes = [
  { path: '', component: NavBarComponent },
  { path: 'home', component: HomeComponent },
  { path: 'favoritos', component: FavoritosComponent},
  { path: 'seguindo', component: SeguindoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
