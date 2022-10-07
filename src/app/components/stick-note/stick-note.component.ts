import { Component, Input, OnInit } from '@angular/core';
import { INote } from 'src/app/interfaces/note.interface';

@Component({
  selector: 'app-stick-note',
  templateUrl: './stick-note.component.html',
  styleUrls: ['./stick-note.component.scss'],
})
export class StickNoteComponent implements OnInit {
  @Input() note!: INote;
  constructor() {}

  ngOnInit(): void {}
}
