import { Component, Input, OnInit } from '@angular/core';
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
  constructor() {}

  ngOnInit(): void {}

  onEditClicked(): void {}

  onDeleteClicked(): void {}
}
