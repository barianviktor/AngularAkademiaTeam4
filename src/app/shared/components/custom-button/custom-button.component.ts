import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss'],
})
export class CustomButtonComponent implements OnInit {
  constructor() {}
  @Input() name: string = 'Login';
  @Input() type: string = 'button';
  @Input() color: string = 'primary';
  @Output() buttonClicked = new EventEmitter<void>();
  ngOnInit(): void {}
  handleClick(): void {
    this.buttonClicked.emit();
  }
}
