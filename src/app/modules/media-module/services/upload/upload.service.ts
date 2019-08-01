import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireDatabase } from '@angular/fire/database';
import { UploadDialogComponent } from '../../components/upload-dialog/upload-dialog.component';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { Upload } from '../../classes/upload.class';

@Injectable()
export class UploadService {

  allowedImageFormats = ['gif', 'jpeg', 'png', 'webp', 'svg+xml', 'x-icon'];
  allowedAudioFormats = ['mpeg', 'wav', 'x-wav', 'wave', 'x-pn-wav'];
  allowedVideoFormats = ['mp4', '3gpp'];
  maxFileSize = 4096;

  constructor(
    private fireStorage: AngularFireStorage,
    private fireDatabase: AngularFireDatabase,
    private snackBar: MatSnackBar
  ) {}

  upload(
    file: File,
    dialogRef: MatDialogRef<UploadDialogComponent>
  ) {
    // Reference to firebase storage
    const storageRef = this.fireStorage.storage.ref();

    const fileType = this.fileTyping(file.type);
    const fileSize = file.size / 1024;

    if (fileType && fileSize < this.maxFileSize) { // Check if file has correct format and size

      storageRef.child(`uploads/${fileType}/${file.name}`).put(file)
      .then(

        snapshot => {
          snapshot.ref.getDownloadURL().then(downloadURL => {
            // Reference to firebase database
            const dataRef = this.fireDatabase.database.ref(`uploads/${fileType}/`);

            // Push new upload data to database
            dataRef.push(new Upload(

              file.name,
              file.type.split('/')[0],
              file.type.split('/')[1],
              file.size,
              downloadURL

            )).catch(error => { // Catch push error

              this.snackBar.open( // Display error message after push error
                error.toString(),
                null,
                {
                  duration: 5000,
                  verticalPosition: 'top',
                  panelClass: 'error-snackbar'
                }
              );

            });
          });
        }
      ).catch(error => { // Catch put error

        this.snackBar.open( // Display error message after put error
          error.toString(),
          null,
          {
            duration: 5000,
            verticalPosition: 'top',
            panelClass: 'error-snackbar'
          }
        );

      });

    } else {

      this.snackBar.open( // Display error if file has incorrect format or size
        `Plik nie spełnia wymagań! Sprawdź format pliku lub rozmiar (max ${this.maxFileSize / 1024}MB).`,
        null,
        {
          duration: 5000,
          verticalPosition: 'top',
          panelClass: 'error-snackbar'
        }
      );
    }

    dialogRef.close(); // Close dialog after upload

  }

  fileTyping(fileType: string) {
    const type = fileType.split('/'); // Split file type

    switch (type[0]) { // Check type (image, audio, video or another file type)
      case 'image':
        // Check image format. If  allowed return type 'images' else return false
        return this.allowedImageFormats.includes(type[1]) ? 'images' : false;
        break;
      case ' audio':
        // Check audio format. If  allowed return type 'audio' else return false
        return this.allowedAudioFormats.includes(type[1]) ? 'audio' : false;
        break;
      case 'video':
        // Check video format. If  allowed return type 'video' else return false
        return this.allowedVideoFormats.includes(type[1]) ? 'video' : false;
        break;
      default:
        // If file type isn't image, audio or video return type 'files'
        return 'files';
    }
  }
}
