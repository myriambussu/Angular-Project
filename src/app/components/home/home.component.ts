import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public imgWidth:number = 500;
  public somebool:boolean = false;
  public inc(){
    this.imgWidth +=10;
  }
  public dec(){
    this.imgWidth -=10;
  }
  public res(){
    this.imgWidth = 500;
  }
  constructor() { }

  ngOnInit() {
  }

  

}
