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
import { TelaLoginComponent } from './components/tela-login/tela-login.component';
import { TelaCadastroComponent } from './components/tela-cadastro/tela-cadastro.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { HttpClientModule } from '@angular/common/http';
import { SeguindoComponent } from './components/seguindo/seguindo.component';
import { MeuperfilComponent } from './components/meuperfil/meuperfil.component';
import { LeituraPageComponent } from './components/leitura-page/leitura-page.component';
import { CriacaoPostComponent } from './components/criacao-post/criacao-post.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    UserCardComponent,
    PostCardComponent,
    TagsCardComponent,
    TelaLoginComponent,
    TelaCadastroComponent,
    FavoritosComponent,
    MeuperfilComponent,
    SeguindoComponent,
    LeituraPageComponent,
    CriacaoPostComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatChipsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
