import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { INote } from 'src/app/interfaces/note.interface';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stick-note',
  templateUrl: './stick-note.component.html',
  styleUrls: ['./stick-note.component.scss'],
})
export class StickNoteComponent implements OnInit {
  @Input() note!: INote;
  faEdit = faEdit;
  faTrash = faTrash;
  @Output() editNote = new EventEmitter<number>();
  @Output() deleteNote = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  onEditClicked(): void {
    this.editNote.emit(this.note.id);
  }

  onDeleteClicked(): void {
    this.deleteNote.emit(this.note.id);
  }
}
