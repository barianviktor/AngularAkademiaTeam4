import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CustomTextInputComponent } from './components/custom-text-input/custom-text-input.component';
import { MainButtonComponent } from './components/main-button/main-button.component';
import { CustomColorInputComponent } from './components/custom-color-input/custom-color-input.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    CustomTextInputComponent,
    MainButtonComponent,
    CustomColorInputComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MaterialModule,
  ],
  exports: [
    ReactiveFormsModule,
    FontAwesomeModule,
    CustomTextInputComponent,
    MainButtonComponent,
    CustomColorInputComponent,
    MaterialModule,
  ],
})
export class SharedModule {}
