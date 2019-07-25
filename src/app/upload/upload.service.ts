import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Upload } from './upload.class';
import { BehaviorSubject } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { MatDialogRef } from '@angular/material';
import { UploadDialogComponent } from './upload-form/upload-dialog/upload-dialog.component';

@Injectable()
export class UploadService {

  private basePath = '/uploads';
  uploads: any;
  progress = new BehaviorSubject(0);

  constructor(
    private fireStorage: AngularFireStorage,
    private fireDatabase: AngularFireDatabase
  ) {}

  pushUpload(file: File, dialogRef: MatDialogRef<UploadDialogComponent>) {
    const storageRef = this.fireStorage.storage.ref();
    const uploadTask = storageRef.child(`${this.basePath}/${file.name}`).put(file);

    uploadTask.on('state_changed', snapshot => {
      this.progress.next((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
    }, error => {
      console.log(error);
    }, () => {
      uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
        this.fireDatabase.database.ref('uploads/').push(new Upload(
          file.name,
          file.name,
          file.type,
          file.size,
          downloadURL
        ));
      }).then(() => {
        dialogRef.close();
      });
    });
  }
}
