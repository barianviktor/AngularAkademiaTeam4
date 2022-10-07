import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickNoteContainerComponent } from './stick-note-container.component';

describe('StickNoteContainerComponent', () => {
  let component: StickNoteContainerComponent;
  let fixture: ComponentFixture<StickNoteContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StickNoteContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StickNoteContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
