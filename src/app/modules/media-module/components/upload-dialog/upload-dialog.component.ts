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
  selectedFile: File;

  constructor(
    public dialogRef: MatDialogRef<UploadDialogComponent>,
    private uploadService: UploadService
  ) {}

  ngOnDestroy() {
    this.selectedFile = null;
  }

  detectFiles(event: any) {
    if (event.target.files.length) {
      this.selectedFile = event.target.files[0];
      this.text = this.selectedFile.name;
    } else {
      this.selectedFile = null;
      this.text = 'Choose a file or drag it here';
    }
  }

  upload() {
    this.uploadService.upload(
      this.selectedFile,
      this.dialogRef
    );
  }

  cancelUpload() {
    this.dialogRef.close();
  }
}
