import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MediaService } from '../../services/media/media.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { UploadDialogComponent } from '../upload-dialog/upload-dialog.component';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit, OnDestroy {

  filesSubscription: Subscription;
  files = [];
  view = 'grid';

  constructor(
    private mediaService: MediaService,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    const type = this.route.snapshot.paramMap.get('type');
    this.filesSubscription = this.mediaService.getFiles(type).subscribe(files => {
      console.log(files);
      this.files = files;
    });
  }

  ngOnDestroy() {
    this.filesSubscription.unsubscribe();
  }

  openDialog() {
    this.dialog.open(UploadDialogComponent);
  }

  switchView(view: string) {
    this.view = view;
  }
}
