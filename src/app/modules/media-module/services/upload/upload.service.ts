import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireDatabase } from '@angular/fire/database';
import { UploadDialogComponent } from '../../components/upload-dialog/upload-dialog.component';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { Upload } from '../../classes/upload.class';

@Injectable()
export class UploadService {

  private basePath = '/uploads';

  constructor(
    private fireStorage: AngularFireStorage,
    private fireDatabase: AngularFireDatabase,
    private snackBar: MatSnackBar
  ) {}

  upload(
    files: FileList,
    dialogRef: MatDialogRef<UploadDialogComponent>
  ) {
    const storageRef = this.fireStorage.storage.ref();
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < files.length; i++) {
      storageRef.child(`${this.basePath}/${files[i].name}`).put(files[i])
      .then(

        snapshot => {
          snapshot.ref.getDownloadURL().then(downloadURL => {
            this.fireDatabase.database.ref('uploads/').push(new Upload(

              files[i].name,
              files[i].type,
              files[i].size,
              downloadURL

            )).then(() => {

              dialogRef.close();

            });
          });
        },

        error => {
          this.snackBar.open(
            error.toString(),
            null,
            {
              duration: 5000,
              verticalPosition: 'top',
              panelClass: 'error-snackbar'
            }
          );
        }
      );
    }
  }
}
