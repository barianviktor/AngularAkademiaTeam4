import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { StickNoteContainerComponent } from 'src/app/components/stick-note-container/stick-note-container.component';
import { StickyNoteControlsComponent } from 'src/app/components/sticky-note-controls/sticky-note-controls.component';

import { HomeNotesComponent } from './home-notes.component';

describe('HomeNotesComponent', () => {
  let component: HomeNotesComponent;
  let fixture: ComponentFixture<HomeNotesComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeNotesComponent,
        StickNoteContainerComponent,
        StickyNoteControlsComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeNotesComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a controller element', () => {
    const container = el.query(By.css('#controls-container'));
    expect(container).toBeTruthy();
  });
  it('should have a horizontal_center_button element', () => {
    const horizontal_center_button = el.query(By.css('#horizontal-center'));
    expect(horizontal_center_button).toBeTruthy();
  });
});
