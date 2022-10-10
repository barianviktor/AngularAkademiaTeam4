import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/login/login.component';
import { Task1Component } from './features/task1/task1.component';
import { Task2Component } from './features/task2/task2.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CustomTextInputComponent } from './components/custom-text-input/custom-text-input.component';
import { MainButtonComponent } from './components/main-button/main-button.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { CreationalFormComponent } from './components/creational-form/creational-form.component';
import { StickNoteComponent } from './components/stick-note/stick-note.component';
import { StickNoteContainerComponent } from './components/stick-note-container/stick-note-container.component';
import { CustomButtonComponent } from './components/custom-button/custom-button.component'
import { HomeNotesComponent } from './features/notes/home-notes/home-notes.component';
import { NewNoteComponent } from './features/notes/new-note/new-note.component';
import { CustomColorInputComponent } from './components/custom-color-input/custom-color-input.component';
import { AddStickyNoteComponent } from './components/add-sticky-note/add-sticky-note.component';
import { EditNoteComponent } from './features/notes/edit-note/edit-note.component';
import { EditNoteFormComponent } from './components/edit-note-form/edit-note-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StickyNoteControlsComponent } from './components/sticky-note-controls/sticky-note-controls.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AccordionItemComponent } from './components/accordion-item/accordion-item.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    Task1Component,
    Task2Component,
    NavigationComponent,
    CustomTextInputComponent,
    MainButtonComponent,
    CustomButtonComponent,
    CreationalFormComponent,
    StickNoteComponent,
    StickNoteContainerComponent,
    HomeNotesComponent,
    NewNoteComponent,
    CustomColorInputComponent,
    AddStickyNoteComponent,
    EditNoteComponent,
    EditNoteFormComponent,
    StickyNoteControlsComponent,
    AccordionComponent,
    AccordionItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
