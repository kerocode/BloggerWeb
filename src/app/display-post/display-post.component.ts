import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostServiceService } from '../post-service.service';
@Component({
  selector: 'app-display-post',
  templateUrl: './display-post.component.html',
  styleUrls: ['./display-post.component.css']
})
export class DisplayPostComponent implements OnInit {
  id: number;
  private sub: any;
  post;
  errorMessage;
  constructor(private route: ActivatedRoute,private postServiceService:PostServiceService) { }
  topics = ["sports","Computer Science","Machine Learning","Artificial intelligence","Deep Learning","Fashion","Political", "Educational"]

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getPost(+params['id']);
    });
  }
  getPost(id) {
    this.postServiceService.getPostById(id)
      .subscribe(
      post => this.post = post,
      error => this.errorMessage = <any>error);
  }
}
