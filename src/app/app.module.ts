import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormViewComponent } from './formView/formView.component';
import { ListViewComponent } from './listView/listView.component';

import { MovieService } from './services/movie.service';
import { ObjectToArray } from './formView/objectToArray.pipe';


@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        FormViewComponent,
        ListViewComponent,
        ObjectToArray
    ],
    providers: [MovieService],
    bootstrap: [AppComponent]
})

export class AppModule { }