import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  faTrash,
  faAlignCenter,
  faAlignJustify,
  faAlignLeft,
  faAlignRight,
  faArrowDownUpAcrossLine,
  faArrowUp,
  faArrowDown,
  faArrowsUpToLine,
  faArrowsUpDownLeftRight,
} from '@fortawesome/free-solid-svg-icons';
import { NoteService } from 'src/app/services/note.service';
@Component({
  selector: 'app-sticky-note-controls',
  templateUrl: './sticky-note-controls.component.html',
  styleUrls: ['./sticky-note-controls.component.scss'],
})
export class StickyNoteControlsComponent implements OnInit {
  faTrash = faTrash;
  faAlignCenter = faAlignCenter;
  faAlignJustify = faAlignJustify;
  faAlignLeft = faAlignLeft;
  faAlignRight = faAlignRight;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  faArrowDownUpAcrossLine = faArrowDownUpAcrossLine;
  faArrowsUpDownLeftRight = faArrowsUpDownLeftRight;
  @Output() setHorizontal = new EventEmitter<string>();
  @Output() setVertical = new EventEmitter<string>();
  constructor(private noteService: NoteService) {}
  onSetHorizontal(value: string) {
    this.setHorizontal.emit(value);
  }
  onSetVertical(value: string) {
    this.setVertical.emit(value);
  }
  ngOnInit(): void {}
  handleDeleteAll() {
    this.noteService.deleteAllNotes();
  }
}
