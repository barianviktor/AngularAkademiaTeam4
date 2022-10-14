import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [CustomInputComponent, CustomButtonComponent],
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
