﻿import { Component } from '@angular/core';

import { MovieService } from '../services/movie.service';

@Component({
    moduleId: module.id,
    selector: 'form-view',
    templateUrl: 'formView.component.html',
    styleUrls: ['formView.component.css']
})

export class FormViewComponent {
    public categories;
    public movie: any = {
        casts: [{}]
    };
    private id: number = 0;
    public submited: boolean = false;

    constructor(private movieService: MovieService) { }

    ngOnInit() {
        this.categories = this.movieService.getCategories();

        this.movie.category = 'action';
    }

    clickAddCast() {
        this.submited = false;

        this.movie.casts.push({});
    }

    clickRemoveCast(index: number) {
        this.movie.casts.splice(index, 1);
    }

    clickSubmitMovie(e, movieForm) {
        e.preventDefault();
        let isValid = movieForm.valid;
        this.submited = true;

        // this should not be required if Angular2 validation works properly
        this.movie.casts.forEach(cast => {
            if (!cast.actor || !cast.salary) {
                isValid = false 
            }
        });

        if (isValid) {
            this.movieService.createMovie(this.movie);

            // reset data :
            this.submited = false;
            this.movie = {
                casts: [{}]
            };
        }
    }

    // Both should be replaced with [(ngModel)], it doesn't work for some reason
    changeSetActor($event, i) {
        this.movie.casts[i].actor = $event.target.value;
    }

    changeSetSalary($event, i) {
        this.movie.casts[i].salary = $event.target.value;
    }
}