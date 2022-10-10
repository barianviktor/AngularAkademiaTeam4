import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyNoteControlsComponent } from './sticky-note-controls.component';

describe('StickyNoteControlsComponent', () => {
  let component: StickyNoteControlsComponent;
  let fixture: ComponentFixture<StickyNoteControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StickyNoteControlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StickyNoteControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
