import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.css']
})
export class TelaCadastroComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

    toLogin(){
      this.router.navigate(['tela-login']);
    }
}


