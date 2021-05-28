import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css'],
})
export class PostCardComponent implements OnInit {
  public posts: Array<any> = [];

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getResults('getallposts').subscribe((data) => {
      console.log(data);

      // data.posts.forEach((post): any => {
      //   post.create_at = this.formatDate(post.created_at);
      //   this.posts.push(post);
      // });
    });
  }

  private formatDate(date: string): string {
    let dateArr = date.substr(0, 10).split('-');
    let dateFormatted = `${dateArr[2]}/${dateArr[1]}/${dateArr[0]}`;
    return dateFormatted;
  }
}
