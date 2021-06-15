import { Component, OnInit } from '@angular/core';
import { logging } from 'selenium-webdriver';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuracao',
  templateUrl: './configuracao.component.html',
  styleUrls: ['./configuracao.component.css']
})
export class ConfiguracaoComponent implements OnInit {

  public userName: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.userName = 'Matheus Henrique Ribeiro da Silva';
  }
  telalogin(){
    this.router.navigate(['tela-login']);
  }
  meuperfil(){
    this.router.navigate(['meuperfil']);
  }

}
