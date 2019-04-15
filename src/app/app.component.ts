import { Component } from '@angular/core';
import { Movie } from './movie';
import { MovieService } from './movie.service';

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
  contentRating = 0;
  res = 0;
  movie: Movie ={'data': [0,0,0,0,0,0,0,0,0]}
  title = 'Movie Rater';

  constructor(private movieService: MovieService){

  }

  setCountry(x:string) {
    console.log(x);
    this.country=['USA','UK','Colombia','Other'].indexOf(x);
  }
  
  setContentRating(x:string) {
    console.log(x);
    this.contentRating=['R','PG-13','PG','Other'].indexOf(x);
  }

  predict() {
    this.movie.data[0]=this.year;
    this.movie.data[1]=this.country;
    this.movie.data[2]=this.duration;
    this.movie.data[3]=this.contentRating;
    this.movie.data[4]=this.budget;
    this.movie.data[5]=this.facenumber;
    this.movie.data[6]=this.dir_likes;
    this.movie.data[7]=this.cast_likes;
    this.movie.data[8]=this.movie_likes;
    this.movieService.predict(this.movie).subscribe(res=>{
      console.log(res);
      this.res = res[0];
    });
  }

}
