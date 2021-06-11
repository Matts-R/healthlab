  import { Component, OnInit } from '@angular/core';
import { MatChip } from '@angular/material/chips';
import { HttpService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-tags-card',
  templateUrl: './tags-card.component.html',
  styleUrls: ['./tags-card.component.css'],
})
export class TagsCardComponent implements OnInit {
  public tags: Array<any> = [];
  public allTags: Array<any> = [];

  public modalClass: string = 'modal-hidden';

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.tags = [
      {
        name: 'Nutrição',
      },
      {
        name: 'Atividade física',
      },
      {
        name: 'Saúde emocional',
      },
      {
        name: 'Trabalho saudável',
      },
      {
        name: 'Prevenção de doenças',
      },
      {
        name: 'Psiquiatria',
      },
      {
        name: 'Medicina alternativa',
      },
      {
        name: 'Fisioterapia',
      },
      {
        name: 'psicologia',
      },

    ]
    this.allTags = this.tags
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
