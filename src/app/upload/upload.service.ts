import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Upload } from './upload.class';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UploadService {

  private basePath = '/uploads';
  uploads: any;
  progress = new BehaviorSubject(0);

  constructor(
    private fireStorage: AngularFireStorage
  ) {}

  pushUpload(upload: Upload) {
    const storageRef = this.fireStorage.storage.ref();
    const uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);

    uploadTask.on('state_changed', snapshot => {
      this.progress.next((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
    }, error => {
      console.log(error);
    }, () => {
      uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
        console.log('File available at', downloadURL);
      });
    });
  }
}
