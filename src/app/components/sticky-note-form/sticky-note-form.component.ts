import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IStickyNoteForm } from 'src/app/utils/forms-interfaces/stickyNoteForm.interface';

@Component({
  selector: 'app-sticky-note-form',
  templateUrl: './sticky-note-form.component.html',
  styleUrls: ['./sticky-note-form.component.scss'],
})
export class StickyNoteFormComponent implements OnInit {
  @Input() form!: FormGroup<IStickyNoteForm>;
  @Input() title: string = 'New Note';
  @Output() formSubmited = new EventEmitter<void>();
  constructor() {}
  get content(): FormControl {
    return this.form.get('content') as FormControl;
  }
  get color(): FormControl {
    return this.form.get('color') as FormControl;
  }
  get backgroundColor(): FormControl {
    return this.form.get('backgroundColor') as FormControl;
  }
  ngOnInit(): void {}
  onHandleForm() {
    this.formSubmited.emit();
  }
}
