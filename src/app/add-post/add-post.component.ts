import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostServiceService } from '../post-service.service';
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  isValid = false;
  errorMessage;
  response;
  constructor(private postServiceService: PostServiceService, private router: Router) { }
  post = {
    "authorId": 1,
    "publisherId": 1,
    "headerImageId": 2,
    "body": "",
    "title": "",
    "publishedOn": "2005-09-01T00:00:00",
    "updatedOn": "2017-03-08T00:42:13.707"
  }
  ngOnInit() {
  }
  ngAfterContentChecked() {
    if ((this.post.body !== "") && (this.post.title !== "")) {
      this.isValid = true;
    }
  }
  onConfirm() {
    if ((this.post.body !== "") && (this.post.title !== "")) {
      this.postServiceService.addPost(this.post).subscribe();
      this.router.navigate(['/home']);
    }

  }
}
