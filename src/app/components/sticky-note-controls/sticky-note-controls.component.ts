import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { NoteService } from 'src/app/services/note.service';
@Component({
  selector: 'app-sticky-note-controls',
  templateUrl: './sticky-note-controls.component.html',
  styleUrls: ['./sticky-note-controls.component.scss'],
})
export class StickyNoteControlsComponent implements OnInit {
  faTrash = faTrash;
  constructor(private noteService: NoteService) {}

  ngOnInit(): void {}
  handleDeleteAll() {
    this.noteService.deleteAllNotes();
  }
}
