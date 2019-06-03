import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DbComponent } from './db/db.component';

const routes: Routes = [
  { path: '', component: DbComponent },
  {
    path: 'class',
    loadChildren: () =>
      import('./class/class.module').then(mod => mod.ClassModule)
  },
  {
    path: 'books',
    loadChildren: () =>
      import('./books/books.module').then(mod => mod.BooksModule)
  },
  {
    path: 'courses',
    loadChildren: () =>
      import('./courses/courses.module').then(mod => mod.CoursesModule)
  },
  {
    path: 'study-material',
    loadChildren: () =>
      import('./study-material/study-material.module').then(
        mod => mod.StudyMaterialModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
