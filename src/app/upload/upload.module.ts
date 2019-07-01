import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadService } from './upload.service';
import { UploadFormComponent } from './upload-form/upload-form.component';
import { AngularFireStorageModule } from '@angular/fire/storage';

@NgModule({
  declarations: [
    UploadFormComponent
  ],
  imports: [
    CommonModule,
    AngularFireStorageModule
  ],
  exports: [
    UploadFormComponent
  ],
  providers: [
    UploadService
  ]
})
export class UploadModule { }
