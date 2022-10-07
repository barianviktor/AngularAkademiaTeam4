import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-color-input',
  templateUrl: './custom-color-input.component.html',
  styleUrls: ['./custom-color-input.component.scss'],
})
export class CustomColorInputComponent implements OnInit {
  @Input() control!: FormControl;
  @Input() label: string = '';
  constructor() {}

  ngOnInit(): void {}
}
