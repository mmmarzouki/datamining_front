import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Movie } from './movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private url = 'http://52.151.245.245/score';

  constructor(private http: HttpClient) { }

  public predict(movie:Movie): Observable<number[]> {
    return this.http.post<number[]>(this.url, movie, this.httpOptions);
  }

}
