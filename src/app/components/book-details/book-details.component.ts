import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemoService } from 'src/app/services/demo.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  public num:number
  public book:object
  constructor(public router:ActivatedRoute , public b:DemoService) {
    this.num = router.snapshot.params.id;
    this.book = b.getBook(this.num);
   }

  ngOnInit() {
  }

}
