import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  ID2=localStorage.getItem("UserId");

  constructor(public check:UserService) { }

  ngOnInit(): void {
    this.check.check(this.ID2);
          this.check.LoggedIn();
  }

}
