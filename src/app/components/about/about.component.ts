import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public myUsers
  constructor(public users:UsersService) { }

  ngOnInit() { 
    this.users.getUsers().subscribe(userArr=>{
      console.log(userArr)
      this.myUsers = userArr
    })
  }
 

}
