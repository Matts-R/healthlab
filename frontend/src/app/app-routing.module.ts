import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';

const routes: Routes = [
  { path: '', component: NavBarComponent },
  { path: 'home', component: HomeComponent },
  { path: 'favoritos', component: FavoritosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
