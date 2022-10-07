import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-text-input',
  templateUrl: './custom-text-input.component.html',
  styleUrls: ['./custom-text-input.component.scss'],
})
export class CustomTextInputComponent implements OnInit {
  @Input() type?: string
  @Input() control !: FormControl
  @Input() placeHolder?: string

  constructor() {}

  ngOnInit(): void {}
}
