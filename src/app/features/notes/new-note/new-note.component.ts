import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { INote } from 'src/app/interfaces/note.interface';
import { NoteService } from 'src/app/services/note.service';
import { StickyNoteForm } from 'src/app/utils/forms/StickyNoteForm';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss'],
})
export class NewNoteComponent implements OnInit, OnDestroy {
  public newNoteForm: StickyNoteForm = new StickyNoteForm();
  constructor(private noteService: NoteService, private router: Router) {}
  ngOnDestroy(): void {
    console.log('destroy new stick page');
  }

  get content(): FormControl {
    return this.newNoteForm.get('content') as FormControl;
  }
  get color(): FormControl {
    return this.newNoteForm.get('color') as FormControl;
  }
  get backgroundColor(): FormControl {
    return this.newNoteForm.get('backgroundColor') as FormControl;
  }
  handleSubmit(): void {
    console.log('handled');

    if (this.newNoteForm.valid) {
      let note: INote = {
        id: this.noteService.noteList$.value.length,
        color: this.color.getRawValue(),
        backgroundColor: this.backgroundColor.getRawValue(),
        content: this.content.getRawValue(),
        create_at: new Date().toISOString().split('T')[0],
      };
      console.log(note);

      this.noteService.addNote(note);

      this.router.navigate(['/notes']);
    } else {
      this.newNoteForm.markAllAsTouched();
    }
  }
  ngOnInit(): void {
    this.color.setValue('#00000');
    this.backgroundColor.setValue('#ea2a2a');
  }
}
