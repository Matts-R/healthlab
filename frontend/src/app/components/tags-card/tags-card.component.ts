import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags-card',
  templateUrl: './tags-card.component.html',
  styleUrls: ['./tags-card.component.css'],
})
export class TagsCardComponent implements OnInit {
  public tags: Array<any> = [];

  constructor() {}

  ngOnInit(): void {
    this.tags = [
      {
        description: 'Testing',
      },
      {
        description: 'test',
      },
      {
        description: 'aahhh',
      },
      {
        description: 'bla',
      },
      {
        description: 'ble',
      },
      {
        description: 'bli',
      },
      {
        description: 'blo',
      },
      {
        description: 'blu',
      },
      {
        description: 'Chips',
      },
      {
        description: 'Are',
      },
      {
        description: 'Cool',
      },
      {
        description: 'Hello',
      },
      {
        description: 'Guys',
      },
      {
        description: 'Pipipi',
      },
      {
        description: 'Popopo',
      },
      {
        description: 'Cardiologia',
      },
    ];
  }

  getChipValue(chipValue: string): void {
    console.log(chipValue);
  }
}
