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
        name: 'Gabriel Monteiro',
        imagem: 'assets/Cara.png',
      },
      {
        name: 'Marcela Muniz',
        imagem: 'assets/profile_3.png',
      },
      {
        name: 'Julia Gomes',
        imagem: 'assets/Mina.png',
      },
    ]; 
    console.log(this.posts);
  }
}



