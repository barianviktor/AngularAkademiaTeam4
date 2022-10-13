import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppModule } from 'src/app/app.module';
import { StickNoteContainerComponent } from 'src/app/components/stick-note-container/stick-note-container.component';
import { StickyNoteControlsComponent } from 'src/app/components/sticky-note-controls/sticky-note-controls.component';

import { HomeNotesComponent } from './home-notes.component';

describe('HomeNotesComponent', () => {
  let component: HomeNotesComponent;
  let fixture: ComponentFixture<HomeNotesComponent>;
  let el: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeNotesComponent],
      imports: [AppModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a controller element', () => {
    const container = el.querySelector('#controls-container');
    expect(container).toBeTruthy();
  });
  it('should have a horizontal_center_button element', () => {
    const horizontal_center_button = el.querySelector('#horizontal-center');
    expect(horizontal_center_button).toBeTruthy();
  });
  it('if thre is a notelist item we should be able to delete it', () => {
    const originalDeleteButtons = el.querySelectorAll('.deleteIcon');
    if (originalDeleteButtons.length > 0) {
      originalDeleteButtons[0].dispatchEvent(new Event('click'));
      fixture.detectChanges();
      expect(el.querySelectorAll('.deleteIcon').length).toBe(
        originalDeleteButtons.length - 1
      );
    }
  });
});
