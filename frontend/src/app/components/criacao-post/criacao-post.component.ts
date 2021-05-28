import { Component, OnInit } from '@angular/core';
import { MatChip } from '@angular/material/chips';
import { HttpService } from 'src/app/services/http-service.service';
@Component({
  selector: 'app-criacao-post',
  templateUrl: './criacao-post.component.html',
  styleUrls: ['./criacao-post.component.css']
})
export class CriacaoPostComponent implements OnInit {
  public tags: Array<any> = [];
  public allTags: Array<any> = [];

  public modalClass: string = 'modal-hidden';


  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }
  selectChip(chip: MatChip): void {
    chip.toggleSelected();
  }

  openModal(): void {
    this.modalClass = 'modal-open';
  }

  closeModal(): void {
    this.modalClass = 'modal-hidden';
  }

}
