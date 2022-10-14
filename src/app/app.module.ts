import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/login/login.component';
import { Task1Component } from './features/task1/task1.component';
import { Task2Component } from './features/task2/task2.component';

import { AccordionItemComponent } from './components/accordion-item/accordion-item.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AddStickyNoteComponent } from './components/add-sticky-note/add-sticky-note.component';
import { GridContainerComponent } from './components/grid-container/grid-container.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { StickNoteContainerComponent } from './components/stick-note-container/stick-note-container.component';
import { StickNoteComponent } from './components/stick-note/stick-note.component';
import { StickyNoteControlsItemComponent } from './components/sticky-note-controls-item/sticky-note-controls-item.component';
import { StickyNoteControlsComponent } from './components/sticky-note-controls/sticky-note-controls.component';
import { StickyNoteFormComponent } from './components/sticky-note-form/sticky-note-form.component';
import { AccordionTaskComponent } from './features/accordion-task/accordion-task.component';
import { GridTaskComponent } from './features/grid-task/grid-task.component';
import { EditNoteComponent } from './features/notes/edit-note/edit-note.component';
import { HomeNotesComponent } from './features/notes/home-notes/home-notes.component';
import { NewNoteComponent } from './features/notes/new-note/new-note.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    Task1Component,
    Task2Component,
    NavigationComponent,
    StickNoteComponent,
    StickNoteContainerComponent,
    HomeNotesComponent,
    NewNoteComponent,
    AddStickyNoteComponent,
    EditNoteComponent,
    StickyNoteControlsComponent,
    AccordionComponent,
    AccordionItemComponent,
    LoginFormComponent,
    AccordionTaskComponent,
    StickyNoteFormComponent,
    GridTaskComponent,
    GridContainerComponent,
    StickyNoteControlsItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
