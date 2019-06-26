import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BooksComponent } from './components/books/books.component';
import { AboutComponent } from './components/about/about.component';
import { Page404Component } from './components/page404/page404.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "books", component: BooksComponent},
  {path: "about", component: AboutComponent},
  {path: "book/:id", component: BookDetailsComponent},
  {path: "", redirectTo:"home",pathMatch:"full"},
  {path: "**", component: Page404Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
