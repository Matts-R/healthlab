import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent implements OnInit {
  public userName: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.userName = 'Matheus Henrique Ribeiro da Silva';
  }

  test(): void {
    this.router.navigate(['meuperfil']);
  }
}
