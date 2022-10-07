import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss'],
})
export class CustomButtonComponent implements OnInit {
  @Output() buttonClicked = new EventEmitter<void>();
  @Input() content = '';
  constructor() {}

  ngOnInit(): void {}
}
