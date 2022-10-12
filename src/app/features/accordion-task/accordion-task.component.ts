import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccordionItem } from 'src/app/interfaces/accordion-item';
import { AccordionService } from 'src/app/services/accordion.service';

@Component({
  selector: 'app-accordion-task',
  templateUrl: './accordion-task.component.html',
  styleUrls: ['./accordion-task.component.scss'],
})
export class AccordionTaskComponent implements OnInit {
  accordionList$?: Observable<AccordionItem[]>;
  constructor(private accordionService: AccordionService) {}

  ngOnInit(): void {
    this.accordionList$ = this.accordionService.getData$();
    //this.accordionDataList = this.accordionService.getData();
  }
}
