import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  filter,
  first,
  from,
  Observable,
  switchMap,
  tap,
} from 'rxjs';
import { INote } from '../interfaces/note.interface';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  noteList$: BehaviorSubject<INote[]> = new BehaviorSubject<INote[]>([
    {
      id: 0,
      content: 'adsadsadsadsadsa',
      color: 'white',
      backgroundColor: 'red',
      create_at: '2022-01-01',
    },
    {
      id: 1,
      content: 'adsadsdadsafdfasfcxycdsadsa',
      color: 'white',
      backgroundColor: 'orange',
      create_at: '2022-01-01',
    },
    {
      id: 2,
      content: 'adsadsadsadfdcxya dsadsa sadsa',
      color: 'white',
      backgroundColor: 'blue',
      create_at: '2022-01-01',
    },
    {
      id: 3,
      content: 'adsadsadsadsdsadsad  dsdwqewq  sadsa',
      color: 'white',
      backgroundColor: 'green',
      create_at: '2022-01-01',
    },
  ]);

  constructor() {}

  addNote(note: INote): void {
    let notes = this.noteList$.getValue();
    notes.push(note);
    this.noteList$.next(notes);
  }
  getNote$(id: number): Observable<INote> {
    return this.noteList$.pipe(
      switchMap((notes: INote[]) => {
        return from(notes);
      }),
      first((note: INote) => {
        return note.id == id;
      })
    );
  }
}
