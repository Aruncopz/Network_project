import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  showMainPage: boolean=true;
  showDetailsDisplayPage: boolean=false;
  selectedReceiver:any;
  public users =[
   {
    image:"/assets/images/arun.png",
    name:'Arun',
    place:'Neyveli',
   }, 
   {
    image:"/assets/images/arun1.png",
    name:'tazeen',
    place:'Chennai',
   }, 
   {
    image:"/assets/images/arun.png",
    name:'madhan',
    place:'Neyveli',
   },
   {
    image:"/assets/images/arun1.png",
    name:'Arun',
    place:'Neyveli',
   }, 
   {
    image:"/assets/images/arun1.png",
    name:'Arun',
    place:'Neyveli',
   }, 
   {
    image:"/assets/images/arun.png",
    name:'Arun',
    place:'Neyveli',
   }, 
   {
    image:"/assets/images/arun1.png",
    name:'Arun',
    place:'Neyveli',
   }, 
   {
    image:"/assets/images/arun.png",
    name:'Arun',
    place:'Neyveli',
   }, 
   {
    image:"/assets/images/arun1.png",
    name:'Arun',
    place:'Neyveli',
   }, 
   {
    image:"/assets/images/arun.png",
    name:'Arun',
    place:'Neyveli',
   }, 
   {
    image:"/assets/images/arun1.png",
    name:'Arun',
    place:'Neyveli',
   }, 
   {
    image:"/assets/images/arun.png",
    name:'Arun',
    place:'Neyveli',
   }, 
   {
    image:"/assets/images/arun.png",
    name:'Arun',
    place:'Neyveli',
   }, 
   {
    image:"/assets/images/arun1.png",
    name:'Arun',
    place:'Neyveli',
   }, 
   {
    image:"/assets/images/arun.png",
    name:'Arun',
    place:'Neyveli',
   }, 
  ]
  currentUser:any;
  constructor() { }

  ngOnInit(): void {
  }
  showElements: boolean = false;
  showListElements: boolean = false;
  selectCurrentUser(user:any){ console.log("hi",user);this.currentUser=user;
   this.showMainPage=false;this.showDetailsDisplayPage=true;}
  showElements1: boolean = false;
  showListElements1: boolean = false;
}
