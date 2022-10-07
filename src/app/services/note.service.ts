import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { INote } from '../interfaces/note.interface';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  noteList$: BehaviorSubject<INote[]> = new BehaviorSubject<INote[]>([
    {
      id: 0,
      content: 'adsadsadsadsadsa',
      color: 'red',
      create_at: '2022-01-01',
    },
    {
      id: 1,
      content: 'adsadsdadsafdfasfcxycdsadsa',
      color: 'orange',
      create_at: '2022-01-01',
    },
    {
      id: 2,
      content: 'adsadsadsadfdcxya dsadsa sadsa',
      color: 'blue',
      create_at: '2022-01-01',
    },
    {
      id: 3,
      content: 'adsadsadsadsdsadsad  dsdwqewq  sadsa',
      color: 'green',
      create_at: '2022-01-01',
    },
  ]);

  constructor() {}

  addNote(note: INote): void {
    let notes = this.noteList$.getValue();
    notes.push(note);
    this.noteList$.next(notes);
  }
}
