import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { INote } from 'src/app/interfaces/note.interface';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-stick-note-container',
  templateUrl: './stick-note-container.component.html',
  styleUrls: ['./stick-note-container.component.scss'],
})
export class StickNoteContainerComponent implements OnInit {
  noteList$: Observable<INote[]>;
  horizontalAlignment: string = 'center';
  verticalAlignment: string = 'center';
  constructor(private noteService: NoteService, private router: Router) {
    this.noteList$ = noteService.noteList$;
  }

  ngOnInit(): void {}
  onEditNote(id: number) {
    this.router.navigate(['/notes', id, 'edit']);
  }
  onDeleteNote(id: number) {
    this.noteService.deleteNote(id);
  }
  onSetHorzontal(horizontal: string) {
    console.log('hor', horizontal, this.horizontalAlignment);

    this.horizontalAlignment = horizontal;
  }
  onSetVerical(vertical: string) {
    console.log('ver', vertical, this.verticalAlignment);

    this.verticalAlignment = vertical;
  }
}
