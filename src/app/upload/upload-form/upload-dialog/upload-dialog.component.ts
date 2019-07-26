import { Component, OnDestroy } from '@angular/core';
import { UploadService } from '../../upload.service';
import { MatDialogRef, MatSnackBar } from '@angular/material';

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
    private uploadService: UploadService,
    private snackBar: MatSnackBar
  ) {}

  ngOnDestroy() {
    this.selectedFiles = null;
  }

  detectFiles(event: any) {
    if (event.target.files.length) {
      this.selectedFiles = event.target.files;
      this.text = this.selectedFiles[0].name;
    } else {
      this.selectedFiles = null;
      this.text = 'Choose a file or drag it here';
    }
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
