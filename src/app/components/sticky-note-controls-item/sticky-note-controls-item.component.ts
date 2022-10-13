import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sticky-note-controls-item',
  templateUrl: './sticky-note-controls-item.component.html',
  styleUrls: ['./sticky-note-controls-item.component.scss'],
})
export class StickyNoteControlsItemComponent implements OnInit {
  @Input() icon!: IconDefinition;
  @Input() value: string = '';
  @Input() current: string = '';
  @Output() itemClicked = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}
  onClick() {
    this.itemClicked.emit(this.value);
  }
}
