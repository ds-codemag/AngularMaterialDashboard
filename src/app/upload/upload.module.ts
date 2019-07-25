import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadService } from './upload.service';
import { UploadFormComponent } from './upload-form/upload-form.component';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UploadDialogComponent } from './upload-form/upload-dialog/upload-dialog.component';

@NgModule({
  declarations: [
    UploadFormComponent,
    UploadDialogComponent
  ],
  imports: [
    CommonModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    UploadFormComponent
  ],
  entryComponents: [
    UploadDialogComponent
  ],
  providers: [
    UploadService
  ]
})
export class UploadModule { }
