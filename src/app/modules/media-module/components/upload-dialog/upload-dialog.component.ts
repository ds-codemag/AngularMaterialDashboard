import { Component, OnDestroy } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { UploadService } from '../../services/upload/upload.service';

@Component({
  selector: 'app-upload-dialog',
  templateUrl: './upload-dialog.component.html',
  styleUrls: ['./upload-dialog.component.scss']
})
export class UploadDialogComponent implements OnDestroy {

  text = 'Choose a file or drag it here';
  selectedFiles: FileList;

  constructor(
    public dialogRef: MatDialogRef<UploadDialogComponent>,
    private uploadService: UploadService
  ) {}

  ngOnDestroy() {
    this.selectedFiles = null;
  }

  detectFiles(event: any) {
    if (event.target.files.length) {
      this.selectedFiles = event.target.files;
      this.text = this.selectedFiles.length === 1 ? this.selectedFiles[0].name : `Selected ${this.selectedFiles.length} files`;
    } else {
      this.selectedFiles = null;
      this.text = 'Choose a file or drag it here';
    }
  }

  upload() {
    this.uploadService.upload(
      this.selectedFiles,
      this.dialogRef
    );
  }

  cancelUpload() {
    this.dialogRef.close();
  }
}
