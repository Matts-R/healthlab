import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css'],
})
export class PostCardComponent implements OnInit {
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
