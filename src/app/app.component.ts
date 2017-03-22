import { Component } from '@angular/core';
import { PostServiceService } from './post-service.service';
import  Post  from './post';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
   providers: [ PostServiceService ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  posts: any[]=[];
  errorMessage;
  constructor(private postServiceService: PostServiceService) {
  }

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
