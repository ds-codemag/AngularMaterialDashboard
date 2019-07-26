import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UploadDialogComponent } from './upload-dialog/upload-dialog.component';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.scss']
})

export class UploadFormComponent {

  constructor(
    private dialog: MatDialog
  ) {}

  openDialog() {
    this.dialog.open(UploadDialogComponent);
  }
}
