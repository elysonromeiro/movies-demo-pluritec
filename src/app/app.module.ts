import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie/components/movie-list/movie-list.component';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MovieCardComponent } from './movie/components/movie-card/movie-card.component';
import {MovieService} from './movie/services/movie.service';
import {MatRippleModule} from '@angular/material';
import { MoviePosterComponent } from './movie/components/movie-poster/movie-poster.component';
import { VoteAverageComponent } from './shared/vote-average/vote-average.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieCardComponent,
    MoviePosterComponent,
    VoteAverageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatRippleModule,
    MatProgressSpinnerModule
  ],
  providers: [
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
