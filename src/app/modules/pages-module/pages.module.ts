import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './components/pages/pages.component';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class PagesModule { }
