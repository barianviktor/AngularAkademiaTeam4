import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyNoteControlsItemComponent } from './sticky-note-controls-item.component';

describe('StickyNoteControlsItemComponent', () => {
  let component: StickyNoteControlsItemComponent;
  let fixture: ComponentFixture<StickyNoteControlsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StickyNoteControlsItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StickyNoteControlsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
