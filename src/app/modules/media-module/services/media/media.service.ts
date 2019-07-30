import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()
export class MediaService {

  constructor(
    private fireDatabase: AngularFireDatabase
  ) {}

  getFiles(type: string) {
    return this.fireDatabase.list(`uploads/${type}`).valueChanges();
  }
}
