import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';

import { NewNoteComponent } from './new-note.component';

describe('NewNoteComponent', () => {
  let component: NewNoteComponent;
  let fixture: ComponentFixture<NewNoteComponent>;
  let el: any;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewNoteComponent],
      imports: [AppModule],
    }).compileComponents();

    fixture = TestBed.createComponent(NewNoteComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create a new note', fakeAsync(() => {
    const contentInput: HTMLInputElement = el.querySelector(
      '#stickyNoteFormContentInput'
    );
    const colorInput: HTMLInputElement = el.querySelector(
      '#stickyNoteFormColorInput'
    );
    const backgroundColorInput: HTMLInputElement = el.querySelector(
      '#stickyNoteFormBackgroundColorInput'
    );
  }));
});
