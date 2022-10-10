import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { INote } from 'src/app/interfaces/note.interface';

@Component({
  selector: 'app-edit-note-form',
  templateUrl: './edit-note-form.component.html',
  styleUrls: ['./edit-note-form.component.scss'],
})
export class EditNoteFormComponent implements OnInit {
  editForm: FormGroup;
  @Output() changedNoteEmiter = new EventEmitter<INote>();
  @Input() note!: INote;
  constructor(private fb: FormBuilder) {
    this.editForm = fb.group({
      content: ['', [Validators.required]],
      color: ['#00000', [Validators.required]],
      backgroundColor: ['#ea2a2a', [Validators.required]],
    });
  }
  get content(): FormControl {
    return this.editForm.get('content') as FormControl;
  }
  get color(): FormControl {
    return this.editForm.get('color') as FormControl;
  }
  get backgroundColor(): FormControl {
    return this.editForm.get('backgroundColor') as FormControl;
  }
  ngOnInit(): void {
    this.content.setValue(this.note.content);
    this.color.setValue(this.note.color);
    this.backgroundColor.setValue(this.note.backgroundColor);
  }
  handleSubmit() {
    if (this.editForm.valid) {
      let changedNote: INote = {
        id: this.note.id,
        create_at: this.note.create_at,
        content: this.content.getRawValue(),
        color: this.color.getRawValue(),
        backgroundColor: this.backgroundColor.getRawValue(),
      };
      this.changedNoteEmiter.emit(changedNote);
    } else {
      this.editForm.markAllAsTouched();
    }
  }
}
