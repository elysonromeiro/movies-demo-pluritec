import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {MovieListComponent} from './movie/components/movie-list/movie-list.component';


const routes: Routes = [
  {
    path: '',
    component: MovieListComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
