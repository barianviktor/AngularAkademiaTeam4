import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
})
export class CustomInputComponent implements OnInit {
  @Input() type: string = 'text';

  @Input() control?: FormControl;
  @Input() placeHolder: string = '';
  @Input() label: string = '';
  @Input() id: string = '';

  constructor() {}

  ngOnInit(): void {}
}
