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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
