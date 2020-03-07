import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MediaService } from '../../services/media/media.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UploadDialogComponent } from '../upload-dialog/upload-dialog.component';
import { filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit, OnDestroy {

  filesSubscription: Subscription;
  files = [];
  view = 'grid';
  mediaType: string;

  constructor(
    private mediaService: MediaService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) { this.setMediaType(); }

  ngOnInit() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      this.setMediaType();
    });

    this.filesSubscription = this.mediaService.mediaType
    .pipe(switchMap(
      type => this.mediaService.getFiles(type)
    )).subscribe(
      files => {
        this.files = files;
      }
    );
  }

  ngOnDestroy() {
    this.filesSubscription.unsubscribe();
  }

  setMediaType() {
    this.mediaService.mediaType.next(this.route.snapshot.paramMap.get('type'));
  }

  openDialog() {
    this.dialog.open(UploadDialogComponent);
  }

  switchView(view: string) {
    this.view = view;
  }
}
