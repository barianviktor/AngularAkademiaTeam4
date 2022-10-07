import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/login/login.component';
import { HomeNotesComponent } from './features/notes/home-notes/home-notes.component';
import { NewNoteComponent } from './features/notes/new-note/new-note.component';
import { Task1Component } from './features/task1/task1.component';
import { Task2Component } from './features/task2/task2.component';
import { AlreadyAuthGuard } from './guards/already-auth.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'task1',
      },
      {
        path: 'task1',
        component: Task1Component,
      },
      {
        path: 'task2',
        component: Task2Component,
      },
      {
        path: 'notes',
        component: HomeNotesComponent,
      },
      {
        path: 'notes/new',
        component: NewNoteComponent,
      },
    ],
    canActivate: [AuthGuard],
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AlreadyAuthGuard],
    runGuardsAndResolvers: 'always',
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
