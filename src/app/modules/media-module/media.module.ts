// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';

// Components
import { MediaComponent } from './components/media/media.component';
import { MediaGridViewComponent } from './components/media-grid-view/grid.component';
import { MediaListViewComponent } from './components/media-list-view/list.component';
import { UploadDialogComponent } from './components/upload-dialog/upload-dialog.component';

// Services
import { MediaService } from './services/media/media.service';
import { UploadService } from './services/upload/upload.service';

@NgModule({
  declarations: [
    MediaComponent,
    MediaGridViewComponent,
    MediaListViewComponent,
    UploadDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule
  ],
  entryComponents: [
    UploadDialogComponent
  ],
  providers: [
    MediaService,
    UploadService
  ]
})
export class MediaModule { }
