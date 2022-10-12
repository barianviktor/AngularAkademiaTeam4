import { Component, Input, OnInit } from '@angular/core';
import { AccordionItem } from 'src/app/interfaces/accordion-item';
import { AccordionService } from 'src/app/services/accordion.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  @Input() accordionDataList: AccordionItem[] = [];

  constructor() {}

  ngOnInit(): void {}

  onItemClicked(clickedIndex: number): void {
    this.accordionDataList.map((element, elementIndex) => {
      elementIndex === clickedIndex
        ? (element.isSeen = !element.isSeen)
        : (element.isSeen = false);
    });
  }
}
