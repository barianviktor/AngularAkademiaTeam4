import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { INote } from 'src/app/interfaces/note.interface';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-stick-note-container',
  templateUrl: './stick-note-container.component.html',
  styleUrls: ['./stick-note-container.component.scss']
})
export class StickNoteContainerComponent implements OnInit {
  noteList$:Observable<INote[]>
  constructor(private noteService: NoteService) {
    this.noteList$ = noteService.noteList$
  }

  ngOnInit(): void { }

}
