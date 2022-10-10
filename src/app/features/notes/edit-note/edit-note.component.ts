import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { catchError, Observable, switchMap, tap } from 'rxjs';
import { INote } from 'src/app/interfaces/note.interface';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss'],
})
export class EditNoteComponent implements OnInit {
  note$: Observable<INote | undefined>;
  constructor(
    private route: ActivatedRoute,
    private noteService: NoteService,
    private router: Router
  ) {
    this.note$ = route.params.pipe(
      switchMap((params: Params) => {
        return this.noteService.getNote$(params['id']);
      }),
      tap((result: INote | undefined) => {
        if (!result) {
          this.router.navigate(['/notes']);
        }
      })
    );
  }
  handleChangedNoteEmiter(changedNote: INote) {
    this.noteService.editNote(changedNote);
    this.router.navigate(['/notes']);
  }
  ngOnInit(): void {}
}
