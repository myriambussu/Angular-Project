import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../services/demo.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

 public myBooks:object;

  constructor(public _demo:DemoService) { 
    
  }

  ngOnInit() { 
    this._demo.getNewBooks().subscribe(booksArr => this.myBooks = booksArr);
  }

}
