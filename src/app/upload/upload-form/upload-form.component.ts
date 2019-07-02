import { Component, OnInit } from '@angular/core';
import { Upload } from '../upload.class';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.scss']
})

export class UploadFormComponent implements OnInit {

  selectedFiles: FileList;
  progress: any;

  constructor(
    private uploadService: UploadService
  ) { }

  ngOnInit() {
    this.uploadService.progress.subscribe(progress => {
      this.progress = progress;
    })
  }

  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }

  uploadSingle() {
    this.uploadService.pushUpload(this.selectedFiles.item(0));
  }

  uploadMulti() {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.selectedFiles.length; i++) {
      this.uploadService.pushUpload(this.selectedFiles[i]);
    }
  }
}
