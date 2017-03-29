import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
  imagesToUpload: Array<File>;
  imgUrl: string;
  constructor() { }

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
}

