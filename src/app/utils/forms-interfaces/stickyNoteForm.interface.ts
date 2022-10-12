import { FormControl } from '@angular/forms';

export interface IStickyNoteForm {
  content: FormControl<string>;
  color: FormControl<string>;
  backgroundColor: FormControl<string>;
}
