import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadService } from './upload.service';
import { UploadFormComponent } from './upload-form/upload-form.component';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';

@NgModule({
  declarations: [
    UploadFormComponent
  ],
  imports: [
    CommonModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule
  ],
  exports: [
    UploadFormComponent
  ],
  providers: [
    UploadService
  ]
})
export class UploadModule { }
