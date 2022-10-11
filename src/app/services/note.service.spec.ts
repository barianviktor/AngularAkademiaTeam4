import { TestBed } from '@angular/core/testing';

import { NoteService } from './note.service';

describe('NoteService', () => {
  let service: NoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoteService);
    service.noteList$.next([
      {
        id: 0,
        content: 'adsadsadsadsadsa',
        color: '#E2007E',
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
    ]);
  });

  it('should delete an item from list of notes', () => {
    service.deleteNote(0);
    expect(service.noteList$.getValue().length).toBe(1);
  });
  it('should delete all item form list of notes', () => {
    service.deleteAllNotes();
    expect(service.noteList$.getValue().length).toBe(0);
  });
});
