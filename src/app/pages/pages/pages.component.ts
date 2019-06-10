import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  displayedColumns: string[] = ['title', 'author', 'date'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}

export interface PeriodicElement {
  title: string;
  id: number;
  author: string;
  date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, title: 'Hydrogen', author: 'admin', date: '10.06.2019' },
  { id: 2, title: 'Helium', author: 'admin', date: '10.06.2019' },
  { id: 3, title: 'Lithium', author: 'admin', date: '10.06.2019' },
  { id: 4, title: 'Beryllium', author: 'admin', date: '10.06.2019' },
  { id: 5, title: 'Boron', author: 'admin', date: '10.06.2019' },
  { id: 6, title: 'Carbon', author: 'admin', date: '10.06.2019' },
  { id: 7, title: 'Nitrogen', author: 'admin', date: '10.06.2019' },
  { id: 8, title: 'Oxygen', author: 'admin', date: '10.06.2019' },
  { id: 9, title: 'Fluorine', author: 'admin', date: '10.06.2019' },
  { id: 10, title: 'Neon', author: 'admin', date: '10.06.2019' },
];
