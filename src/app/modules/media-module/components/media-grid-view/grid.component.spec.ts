import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaGridViewComponent } from './grid.component';

describe('MediaGridViewComponent', () => {
  let component: MediaGridViewComponent;
  let fixture: ComponentFixture<MediaGridViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaGridViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaGridViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
