import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { MediaService } from 'src/app/services/media.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit, OnDestroy {

  images = [];

  imagesSubscription: Subscription;

  constructor(
    private mediaService: MediaService
  ) {}

  ngOnInit() {
    this.imagesSubscription = this.mediaService.allImages.subscribe(images => {
      this.images = images;
    });
  }

  ngOnDestroy() {
    this.imagesSubscription.unsubscribe();
  }
}
