import { Component } from '@angular/core';

import { MovieService } from '../services/movie.service';

@Component({
    moduleId: module.id,
    selector: 'list-view',
    templateUrl: 'listView.component.html',
    styleUrls: ['listView.component.css']
})

export class ListViewComponent {
    public movies: any[];

    constructor(private movieService: MovieService) { }

    ngOnInit() {
        this.setMovies();
    }

    private setMovies() {
        this.movieService.getMovies().subscribe((movies: any[]) => {
            this.movies = movies;
        });
    }

    changeSort($event) {
        if ($event.target.value === 'asc') {
            this.movieService.sortMoviesAsc();
        } else {
            this.movieService.sortMoviesDesc();
        }

        // refresh movies
        this.movieService.updateMovies();
    }
}