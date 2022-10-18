import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, switchMap, tap } from 'rxjs';
import { INote } from 'src/app/interfaces/note.interface';
import { NoteService } from 'src/app/services/note.service';
import { StickyNoteForm } from 'src/app/utils/forms/StickyNoteForm';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss'],
})
export class EditNoteComponent implements OnInit {
  note$: Observable<INote | undefined>;
  editNoteForm: StickyNoteForm = new StickyNoteForm();
  originalNote?: INote;
  constructor(
    private route: ActivatedRoute,
    private noteService: NoteService,
    private router: Router
  ) {
    this.note$ = this.route.params.pipe(
      switchMap((params: Params) => {
        return this.noteService.getNote$(params['id']);
      }),
      tap((result: INote | undefined) => {
        if (!result) {
          this.router.navigate(['/notes']);
        } else {
          this.content.setValue(result.content);
          this.color.setValue(result.color);
          this.backgroundColor.setValue(result.backgroundColor);
          this.originalNote = result;
        }
      })
    );
  }
  get content(): FormControl {
    return this.editNoteForm.get('content') as FormControl;
  }
  get color(): FormControl {
    return this.editNoteForm.get('color') as FormControl;
  }
  get backgroundColor(): FormControl {
    return this.editNoteForm.get('backgroundColor') as FormControl;
  }

  onFormSubmited(): void {
    let changedNote: INote = {
      backgroundColor: this.backgroundColor.value,
      color: this.color.value,
      content: this.content.value,
      id: this.originalNote?.id!,
      create_at: this.originalNote?.create_at!,
    };
    this.noteService.editNote(changedNote);
    this.router.navigate(['/notes']);
  }
  ngOnInit(): void {}
}
