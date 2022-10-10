import { Component, Input, OnInit } from '@angular/core';
import { faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss']
})
export class AccordionItemComponent implements OnInit {

  @Input() title?: string;
  @Input() description?: string;
  @Input() isClicked?: boolean = false;
  faArrowDown = faArrowDown;
  faArrowRight = faArrowRight;

  constructor() { }

  ngOnInit(): void {
  }

}
