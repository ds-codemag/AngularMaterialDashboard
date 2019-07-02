import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {

  images = [];

  constructor(
    private fireDatabase: AngularFireDatabase
  ) {
    this.fireDatabase.database.ref('uploads').on('value', snapshot => {
      let snapshotImages = [];
      for(let image in snapshot.val()) {
        snapshotImages.push(snapshot.val()[image]);
      }
    });
  }

  ngOnInit() {
    console.log(this.images)
  }

}
