import { NgModule } from '@angular/core';
import {
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatExpansionModule,
  MatButtonModule,
  MatDividerModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule

  ],
  exports: [
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule
  ]
})
export class MaterialModule { }
