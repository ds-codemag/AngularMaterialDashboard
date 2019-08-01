import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MediaService {

  mediaType = new BehaviorSubject(null);

  constructor(
    private fireDatabase: AngularFireDatabase
  ) {}

  getFiles(type: string) {
    return this.fireDatabase.list(`uploads/${type}`).valueChanges();
  }
}
