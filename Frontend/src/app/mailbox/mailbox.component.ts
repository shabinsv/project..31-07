import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.css']
})
export class MailboxComponent implements OnInit {
  contact:any={
    fname:"",
    lname:"",
    email:"",
    comment:""
  }

  constructor(private http:UserService) { }

  ngOnInit(): void {
    this.http.getmessage().subscribe((data)=>{
      this.contact=JSON.parse(JSON.stringify(data));
    })
  }

}
