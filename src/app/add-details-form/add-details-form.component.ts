import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-add-details-form',
  templateUrl: './add-details-form.component.html',
  styleUrls: ['./add-details-form.component.css']
})
export class AddDetailsFormComponent implements OnInit {
  public personForm:{fullName: string; place: string; contact:number; instagram:any; facebook:any; linkedin:any; description:any;}[] =[
    {
    
    fullName:"string",
    place:"string",
    contact:655555,
    instagram:"any",
    facebook:"any",
    linkedin:"string",
    description:"string",
   
     
    
    },];
   
   title="personForm";
   getData(data:NgForm){
    console.warn(data)
   }
  constructor() { }

  ngOnInit(): void {
  }
  showElements: boolean = false;
  showListElements: boolean = false;

 
}
