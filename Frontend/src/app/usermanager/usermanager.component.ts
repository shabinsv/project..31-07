import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-usermanager',
  templateUrl: './usermanager.component.html',
  styleUrls: ['./usermanager.component.css']
})
export class UsermanagerComponent implements OnInit {
  user:any={
    username:"",
    email:"",
    password:"",
    mobileno:""
  }

  constructor(private http:UserService) { }

  ngOnInit(): void {
   
    this.http.getusers().subscribe((data)=>{
      this.user=JSON.parse(JSON.stringify(data));
    })
  }

}
