import { Component } from '@angular/core';
import { Movie } from './movie';
import { MovieService } from './movie.service';
import * from './directors.json';

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
  director = "";
  director_cat = 0;
  res = 0;
  output = '';
  movie: Movie ={'data': [[0,0,0,0,0,0,0,0,0]]}
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

  setDirectorCat(director: string){
    this.director_cat = directors[director];
  }

  predict() {
    this.movie.data[0][0]=this.year;
    this.movie.data[0][1]=this.country;
    this.movie.data[0][2]=this.duration;
    this.movie.data[0][3]=this.contentRating;
    this.movie.data[0][4]=this.budget;
    this.movie.data[0][5]=this.facenumber;
    this.movie.data[0][6]=this.dir_likes;
    this.movie.data[0][7]=this.cast_likes;
    this.movie.data[0][8]=this.movie_likes;
    console.log(this.movie);
    this.movieService.predict(this.movie).subscribe(res=>{
      this.res = res.substring(1,4);
      if(this.res == 3.0){
        this.output="good";
      }
      if(this.res == 4.0){
        this.output="excellent";
      }
    });
  }

}
