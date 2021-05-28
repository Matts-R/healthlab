import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meuperfil',
  templateUrl: './meuperfil.component.html',
  styleUrls: ['./meuperfil.component.css']
})
export class MeuperfilComponent implements OnInit {

  public posts: Array<any> = [];
  public userName: string = '';

  constructor() { }

  ngOnInit(): void {
    this.posts = [
      {
        name: 'Bla',
        quando: 'bli',
        por: 'kk',
      },
      {
        name: 'Bla',
        quando: 'bli',
        por: 'kk',
      },
      {
        name: 'Bla',
        quando: 'bli',
        por: 'kk',
      },
      {
        name: 'Bla',
        quando: 'bli',
        por: 'kk',
      },
    ];

    this.userName = 'Matheus Henrique Ribeiro da Silva';

    console.log(this.posts);
  }

}


