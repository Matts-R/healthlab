import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent implements OnInit {
  public userName: string = '';

  constructor() {}

  ngOnInit(): void {
    this.userName = 'Matheus Henrique Ribeiro da Silva';
  }

  test(): void {
    alert('ola');
  }
}
