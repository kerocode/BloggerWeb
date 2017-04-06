import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
  imagesToUpload: Array<File>;
  imgUrl: string;
  @Input() postId:number;
  constructor() { }
image={};
  ngOnInit() {
  }
  changeFile() {
    document.getElementById('inputFile').click();
  }
  fileChangeEvent(fileInput) {
    this.imagesToUpload = fileInput.target.files;
    console.log(this.imagesToUpload[0])
    const reader = new FileReader();
    if (this.imagesToUpload[0]) {
        this.readFile(this.imagesToUpload[0], reader, (result) => {
        this.imgUrl = result;
      });
    }

  }
  readFile(file, reader, callback) {
    reader.onload = () => {
      callback(reader.result);
    }
    reader.readAsDataURL(file);
  }
  uploadImage(){
   let formData: FormData = new FormData();
    if (this.postId && this.imagesToUpload[0]){
        this.image['PostId']=this.postId;
        this.image['ImageName']= this.imagesToUpload[0].name;
        this.image['ImageContent']=this.imagesToUpload[0];
    }
  }
}

