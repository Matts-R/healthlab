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
        name: 'Victor Nunes',
        imagem: 'assets/profile_1.png',
      },
      {
        name: 'Gabi Suemy',
        imagem: 'assets/profile_3.png',
      },
      {
        name: 'Junio Frois',
        imagem: 'assets/profile_2.png',
      },
    ]; 
    console.log(this.posts);
  }
}



