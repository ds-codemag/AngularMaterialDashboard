import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-media-list-view',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class MediaListViewComponent implements OnInit {

  @Input() files: FileList;

  constructor() { }

  ngOnInit() {
  }

}
