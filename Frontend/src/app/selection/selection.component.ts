import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../form.service';
import { TemplateService } from '../template.service';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';
import {WebcamImage} from 'ngx-webcam';
import {Subject, Observable} from 'rxjs';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number;
  starvalue={
    value:'',
    ID:localStorage.getItem("UserId")
  }
  ID2=localStorage.getItem("UserId");
  draft:any="";
  draftID:any="";

  constructor(public http:FormService, public router:Router,public check:UserService,public temp:TemplateService) { }

  ngOnInit(): void {
    
    this.check.check(this.ID2);
          this.check.LoggedIn();
        let userdata = localStorage.getItem("UserId");
        this.http.usercvdata(userdata).subscribe((data)=>{
          this.http.Updatedata=JSON.parse(JSON.stringify(data));
          
        })
        this.http.loaddraftdata(userdata).subscribe((data)=>{
          this.draft=JSON.parse(JSON.stringify(data));
        
        })
  }
  temp1(){
    this.router.navigate([`user/template1/${this.http.Updatedata._id}`]);
  }
  temp2(){
    this.router.navigate([`user/template2/${this.http.Updatedata._id}`]);
  }
  temp3(){
    this.router.navigate([`user/template3/${this.http.Updatedata._id}`]);
  }
  generatelink(){
    alert('Successfully send link in email.....')
    this.temp.getlink(this.http.Updatedata._id).subscribe((data)=>{
     
    })
    
  }
  backup(){
    let timerInterval
    Swal.fire({
      title: 'Backup Your Resume!!',
      html: 'Loading....',
      timer: 3000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        timerInterval = setInterval(() => {
          const content = Swal.getHtmlContainer()
          if (content) {
            const b = content.querySelector('b')
           
          }
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })
        this.http.changeuserdata(this.draftID).subscribe((data)=>{
          this.check.check(this.ID2);
          this.check.LoggedIn();
          setTimeout(() => {
            window.location.reload();
          }, 3001);
        
        })
  }

  countStar(star) {
    this.selectedValue = star;
    this.starvalue.value=star;
    console.log('Value of star', star);
    this.check.rate(this.starvalue);
  }

}
