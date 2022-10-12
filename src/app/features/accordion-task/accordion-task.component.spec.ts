import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionTaskComponent } from './accordion-task.component';

describe('AccordionTaskComponent', () => {
  let component: AccordionTaskComponent;
  let fixture: ComponentFixture<AccordionTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
