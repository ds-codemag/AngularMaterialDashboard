import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MediaService {

  constructor(
    private fireDatabase: AngularFireDatabase
  ) {}

  get allImages() {
    return this.fireDatabase.list('uploads').valueChanges();
  }
}
