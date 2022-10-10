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
      color: '#00000',
      backgroundColor: '#323232',
      create_at: '2022-01-01',
    },
    {
      id: 1,
      content: 'adsadsdadsafdfasfcxycdsadsa',
      color: '#ffffff',
      backgroundColor: '#f0cb3a',
      create_at: '2022-01-01',
    },
    {
      id: 2,
      content: 'adsadsadsadfdcxya dsadsa sadsa',
      color: '#ffffff',
      backgroundColor: '#679ef0',
      create_at: '2022-01-01',
    },
    {
      id: 3,
      content: 'adsadsadsadsdsadsad  dsdwqewq  sadsa',
      color: '#ffffff',
      backgroundColor: '#42e365',
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
  editNote(changedNote: INote): void {
    let notes = this.noteList$.getValue();

    notes.splice(
      notes.findIndex((note: INote) => {
        return changedNote.id == note.id;
      }),
      1,
      changedNote
    );
    this.noteList$.next(notes);
  }
}
