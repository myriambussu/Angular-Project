import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AsideComponent } from './components/aside/aside.component';
import { Page404Component } from './components/page404/page404.component';
import { BooksComponent } from './components/books/books.component';
import { AboutComponent } from './components/about/about.component';
import {FormsModule} from '@angular/forms';
import { BookDetailsComponent } from './components/book-details/book-details.component'
import {HttpClientModule} from "@angular/common/http";
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AsideComponent,
    Page404Component,
    BooksComponent,
    AboutComponent,
    BookDetailsComponent,
    ThumbnailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
