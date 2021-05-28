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
    this.httpService.getResults('getalltags').subscribe((data) => {
      if (data.status) {
        if (data.result.length > 10) {
          this.tags = data.result.slice(0, 10);
          this.allTags = data.result;
        } else {
          this.tags = data.result;
        }
      }
    });
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
