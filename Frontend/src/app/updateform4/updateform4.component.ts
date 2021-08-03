import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../form.service';

@Component({
  selector: 'app-updateform4',
  templateUrl: './updateform4.component.html',
  styleUrls: ['./updateform4.component.css']
})
export class Updateform4Component implements OnInit {

  constructor(public http:FormService,private router:Router) { }

  ngOnInit(): void {
  }

  updatedata4(){
    this.http.updatedata(this.http.Updatedata);
    alert("Sucessfully Updated");
    this.router.navigate(['user']);
  
   
  }
  insert(){
    this.http.Updatedata.skills.push({skill:""});
  }

  insert2(){
    this.http.Updatedata.languages.push({language:""});
  }
  del(i){
    const index: number = this.http.Updatedata.skills.indexOf(i);
    if (index !== -1) {
        this.http.Updatedata.skills.splice(index, 1);
    }    
    // ths
  }
  del2(i){
    const index: number = this.http.Updatedata.languages.indexOf(i);
    if (index !== -1) {
        this.http.Updatedata.languages.splice(index, 1);
    }    
    // th
  }

}
