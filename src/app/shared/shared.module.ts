import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { MaterialModule } from '../material/material.module';
import { CustomAccordionComponent } from './components/custom-accordion/custom-accordion.component';
import { AccordionItemComponent } from '../components/accordion-item/accordion-item.component';

@NgModule({
  declarations: [CustomInputComponent, CustomButtonComponent, CustomAccordionComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MaterialModule,
  ],
  exports: [
    ReactiveFormsModule,
    FontAwesomeModule,
    CustomInputComponent,
    CustomButtonComponent,
    MaterialModule,
  ],
})
export class SharedModule {}
