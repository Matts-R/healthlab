import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatChipsModule } from '@angular/material/chips';
import { TagsCardComponent } from './components/tags-card/tags-card.component';
<<<<<<< HEAD
import { TelaLoginComponent } from './components/tela-login/tela-login.component';
import { TelaCadastroComponent } from './components/tela-cadastro/tela-cadastro.component';
=======
import { FavoritosComponent } from './components/favoritos/favoritos.component';
>>>>>>> 132fe27da22e1a9a5f47259225cb9a9f4876d244


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    UserCardComponent,
    PostCardComponent,
    TagsCardComponent,
<<<<<<< HEAD
    TelaLoginComponent,
    TelaCadastroComponent,
=======
    FavoritosComponent,

>>>>>>> 132fe27da22e1a9a5f47259225cb9a9f4876d244
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatChipsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
