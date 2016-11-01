import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Injectable()
export class MovieService {
    private movies: any = [];
    private movies$ = new Subject();

    public createMovie(movie) {
        this.movies.push(movie);
        this.sortMoviesAsc();

        this.mapTotal();

        this.movies$.next(this.movies);
    }

    public getMovies() {
        return this.movies$;
    }

    public getCategories() {
        return {
            "action": ["comedy", "crime", "thriller"],
            "animation": ["adventure", "comedy", "family"],
            "documentary": ["biography", "crime", "history"],
            "horror": ["comedy", "drama", "sci-fi"],
            "musical": ["comedy", "romance"],
            "war": ["action", "biography"],
            "adventure": ["biography", "war"],
            "drama": ["romance", "musical"],
            "sci-fi": ["action", "drama"],
            "mystery": ["adventure", "thriller"],
            "western": ["action", "comedy"],
            "thriller": ["action", "mystery"]
        };
    }

    public sortMoviesAsc() {
        this.movies = this.movies.map(movie => {
            movie.casts.sort((a, b) => {
                return a.salary > b.salary;
            });

            return movie;
        });
    }

    public sortMoviesDesc() {
        this.movies = this.movies.map(movie => {
            movie.casts.sort((a, b) => {
                return a.salary < b.salary;
            });

            return movie;
        });
    }

    private mapTotal() {
        this.movies = this.movies.map(movie => {
            let total = 0;

            movie.casts.forEach(cast => {
                total += parseFloat(cast.salary);
            });

            movie.total = total;

            return movie;
        });
    }
}
