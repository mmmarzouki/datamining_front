import { Component } from '@angular/core';
import { Movie } from './movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  year = 1985;
  country = 0;
  duration = 0;
  budget = 0;
  facenumber = 0;
  dir_likes = 0;
  cast_likes = 0;
  movie_likes = 0;
  contentRating =0;
  movie: Movie ={'data': [0,0,0,0,0,0,0,0,0]}
  title = 'Movie Rater';

  setCountry(x:number) {
    this.country=x;
  }
  
  setContentRating(x:number) {
    this.contentRating=x;
  }



}
