import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UploadService } from '../../upload.service';
import { MatDialogRef } from '@angular/material';

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
    this.selectedFiles = event.target.files;
    this.text = this.selectedFiles.length ? `Selected file: ${this.selectedFiles[0].name}` : 'Choose a file or drag it here';
  }

  upload() {
    this.uploadService.pushUpload(
      this.selectedFiles[0],
      this.dialogRef
    );
  }

  cancelUpload() {
    this.dialogRef.close();
  }
}
