import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seguindo',
  templateUrl: './seguindo.component.html',
  styleUrls: ['./seguindo.component.css']
})
export class SeguindoComponent implements OnInit {
  public posts: Array<any> = [];
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

    console.log(this.posts);
  }
  }


