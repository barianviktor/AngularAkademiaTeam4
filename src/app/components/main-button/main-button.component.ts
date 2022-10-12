import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main-button',
  templateUrl: './main-button.component.html',
  styleUrls: ['./main-button.component.scss'],
})
export class MainButtonComponent implements OnInit {
  constructor() {}
  @Input() name: string = 'Login';
  @Input() type: string = 'button';
  @Output() buttonClicked = new EventEmitter<void>();
  ngOnInit(): void {}
  handleClick(): void {
    this.buttonClicked.emit();
  }
}
