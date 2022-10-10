import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { INote } from 'src/app/interfaces/note.interface';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss'],
})
export class EditNoteComponent implements OnInit {
  note$: Observable<INote>;
  constructor(private route: ActivatedRoute, private noteService: NoteService) {
    this.note$ = route.params.pipe(
      switchMap((params: Params) => {
        return this.noteService.getNote$(params['id']);
      })
    );
  }

  ngOnInit(): void {}
}
