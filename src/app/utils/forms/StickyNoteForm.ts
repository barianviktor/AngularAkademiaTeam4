import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IStickyNoteForm } from '../forms-interfaces/stickyNoteForm.interface';

export class StickyNoteForm extends FormGroup<IStickyNoteForm> {
  constructor() {
    super({
      content: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      color: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      backgroundColor: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
    });
  }
}
