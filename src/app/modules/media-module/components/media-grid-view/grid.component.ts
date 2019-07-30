import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-media-grid-view',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class MediaGridViewComponent implements OnInit {

  @Input() files: FileList;

  constructor() { }

  ngOnInit() {
  }

}
