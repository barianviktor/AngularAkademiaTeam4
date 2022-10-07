import { Component, OnInit, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { INote } from 'src/app/interfaces/note.interface';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-creational-form',
  templateUrl: './creational-form.component.html',
  styleUrls: ['./creational-form.component.scss'],
})
export class CreationalFormComponent implements OnInit {
  noteForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private noteService: NoteService,
    private router: Router
  ) {
    this.noteForm = fb.group({
      content: ['', [Validators.required]],
      color: ['#ea2a2a', [Validators.required]],
    });
  }

  get content(): FormControl {
    return this.noteForm.get('content') as FormControl;
  }
  get color(): FormControl {
    return this.noteForm.get('color') as FormControl;
  }

  handleSubmit() {
    if (this.noteForm.valid) {
      let note: INote = {
        color: this.color.getRawValue(),
        content: this.content.getRawValue(),
        create_at: new Date().toISOString().split('T')[0],
      };
      console.log(note);

      this.noteService.addNote(note);

      this.router.navigate(['/notes']);
    } else {
      this.noteForm.markAllAsTouched();
    }
  }
  ngOnInit(): void {}
}
