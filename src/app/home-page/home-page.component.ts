import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../post-service.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private postServiceService: PostServiceService) { }
  posts: any[]=[];
  errorMessage;
  ngOnInit() {
    this.getPosts();
  }
  getPosts() {
    this.postServiceService.getAll()
      .subscribe(
      posts => this.posts = posts,
      error => this.errorMessage = <any>error);
  }
}
