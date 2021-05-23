import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public posts: Array<any> = [];

  constructor() {}

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
