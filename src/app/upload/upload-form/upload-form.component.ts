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
  currentUpload: Upload;
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
    const file = this.selectedFiles.item(0);
    this.currentUpload = new Upload(file);
    this.uploadService.pushUpload(this.currentUpload);
  }

  uploadMulti() {
    const files = this.selectedFiles;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < files.length; i++) {
      this.currentUpload = new Upload(files[i]);
      this.uploadService.pushUpload(this.currentUpload);
    }
  }
}
