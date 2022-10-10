import { Component, OnInit } from '@angular/core';
import { AccordionItem } from 'src/app/interfaces/accordion-item';
import { AccordionService } from 'src/app/services/accordion.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  accordionDataList: AccordionItem[] = [];

  constructor(private accordionService: AccordionService) {}

  ngOnInit(): void {
    this.accordionDataList = this.accordionService.getData();
  }

  onItemClicked(clickedIndex: number): void {
    this.accordionDataList.map((element, elementIndex) => {
      elementIndex === clickedIndex
        ? (element.isSeen = !element.isSeen)
        : (element.isSeen = false);
    });
  }
}
