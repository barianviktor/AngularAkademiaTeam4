import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/login/login.component';
import { EditNoteComponent } from './features/notes/edit-note/edit-note.component';
import { HomeNotesComponent } from './features/notes/home-notes/home-notes.component';
import { NewNoteComponent } from './features/notes/new-note/new-note.component';
import { Task1Component } from './features/task1/task1.component';
import { Task2Component } from './features/task2/task2.component';
import { AlreadyAuthGuard } from './guards/already-auth.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AlreadyAuthGuard],
    runGuardsAndResolvers: 'always',
    title: 'Login',
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'task1',
        component: Task1Component,
        title: 'Centered Square',
      },
      {
        path: 'task2',
        component: Task2Component,
        title: '3 Centered Squares',
      },
      {
        path: 'notes',
        component: HomeNotesComponent,
        title: 'Sticky Notes',
      },
      {
        path: 'notes/:id/edit',
        component: EditNoteComponent,
        title: 'Sticky Notes - Edit',
      },
      {
        path: 'notes/new',
        component: NewNoteComponent,
        title: 'Sticky Notes - New',
      },

      {
        path: '**',
        redirectTo: 'task1',
      },
    ],
    canActivate: [AuthGuard],
    runGuardsAndResolvers: 'always',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
