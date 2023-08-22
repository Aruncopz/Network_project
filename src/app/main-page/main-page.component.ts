import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  showMainPage: boolean=true;
  showDetailsDisplayPage: boolean=false;
  selectedReceiver:any;
  goTowelcomepage(){
    this.router.navigate(['./welcomepage']);
  }
  public users =[
   {
    userid:"1",
    image:"/assets/images/arun.svg",
    name:'Arun',
    place:'Neyveli',
   }, 
   {
    userid:"2",
    image:"/assets/images/per1.svg",
    name:'Surya',
    place:'Chennai',
   }, 
   {
    userid:"3",
    image:"/assets/images/per2.svg",
    name:'madhan',
    place:'Neyveli',
   },
   {
    userid:"4",
    image:"/assets/images/per3.svg",
    name:'Abin',
    place:'Neyveli',
   }, 
   {
    userid:"5",
    image:"/assets/images/per4.svg",
    name:'Siva',
    place:'Neyveli',
   }, 
   {
    userid:"6",
    image:"/assets/images/per5.svg",
    name:'Aswin',
    place:'Neyveli',
   }, 
   {
    userid:"7",
    image:"/assets/images/per6.svg",
    name:'Edov',
    place:'Neyveli',
   }, 
   {
    userid:"8",
    image:"/assets/images/per7.svg",
    name:'Vichu',
    place:'Neyveli',
   }, 
   {
    userid:"9",
    image:"/assets/images/per8.svg",
    name:'Sai',
    place:'Neyveli',
   }, 
   {
    userid:"10",
    image:"/assets/images/per9.svg",
    name:'Gugesh',
    place:'Neyveli',
   },
   {
    userid:"11",
    image:"/assets/images/per10.svg",
    name:'Anush',
    place:'Neyveli',
   }, 
   {
    userid:"12",
    image:"/assets/images/per11.svg",
    name:'Dhivi',
    place:'Neyveli',
   }, 
   {
    userid:"13",
    image:"/assets/images/per12.svg",
    name:'priya',
    place:'Neyveli',
   }, 
   {
    userid:"14",
    image:"/assets/images/per13.svg",
    name:'Tazeen',
    place:'Neyveli',
   }, 
   {
    userid:"15",
    image:"/assets/images/per14.svg",
    name:'Dhanz',
    place:'Neyveli',
   }, 
  ]
  currentUser:any;
  constructor(private router: Router) { }
  userdata :any;
  ngOnInit(): void {
    this.userdata = localStorage.getItem('User');
    this.userdata = JSON.parse(this.userdata)
  }

  selectCurrentUser(data :any ){
    console.log('users',data)
  }
  showElements: boolean = false;
  showListElements: boolean = false;
 
  showElements1: boolean = false;
  showListElements1: boolean = false;

  showprofile(){
  console.log (this.userdata)
   }

   Logout() {
    sessionStorage.removeItem('User');
    this.router.navigate(['./welcomepage']);
  }
}
 



// selectCurrentUser(user:any){ console.log("hi",user);this.currentUser=user;
  //  this.showMainPage=false;this.showDetailsDisplayPage=true;}



//   import { Component, OnInit, Input } from '@angular/core';

// @Component({
//   selector: 'app-main-page',
//   templateUrl: './main-page.component.html',
//   styleUrls: ['./main-page.component.css']
// })
// export class MainPageComponent implements OnInit {
//   showMainPage: boolean=true;
//   showDetailsDisplayPage: boolean=false;
//   selectedReceiver:any;
//   public users =[
//    {
//     image:"/assets/images/arun.png",
//     name:'Arun',
//     place:'Neyveli',
//    }, 
//    {
//     image:"/assets/images/arun1.png",
//     name:'tazeen',
//     place:'Chennai',
//    }, 
//    {
//     image:"/assets/images/arun.png",
//     name:'madhan',
//     place:'Neyveli',
//    },
//    {
//     image:"/assets/images/arun1.png",
//     name:'Arun',
//     place:'Neyveli',
//    }, 
//    {
//     image:"/assets/images/arun1.png",
//     name:'Arun',
//     place:'Neyveli',
//    }, 
//    {
//     image:"/assets/images/arun.png",
//     name:'Arun',
//     place:'Neyveli',
//    }, 
//    {
//     image:"/assets/images/arun1.png",
//     name:'Arun',
//     place:'Neyveli',
//    }, 
//    {
//     image:"/assets/images/arun.png",
//     name:'Arun',
//     place:'Neyveli',
//    }, 
//    {
//     image:"/assets/images/arun1.png",
//     name:'Arun',
//     place:'Neyveli',
//    }, 
//    {
//     image:"/assets/images/arun.png",
//     name:'Arun',
//     place:'Neyveli',
//    }, 
//    {
//     image:"/assets/images/arun1.png",
//     name:'Arun',
//     place:'Neyveli',
//    }, 
//    {
//     image:"/assets/images/arun.png",
//     name:'Arun',
//     place:'Neyveli',
//    }, 
//    {
//     image:"/assets/images/arun.png",
//     name:'Arun',
//     place:'Neyveli',
//    }, 
//    {
//     image:"/assets/images/arun1.png",
//     name:'Arun',
//     place:'Neyveli',
//    }, 
//    {
//     image:"/assets/images/arun.png",
//     name:'Arun',
//     place:'Neyveli',
//    }, 
//   ]
//   currentUser:any;
//   constructor() { }

//   ngOnInit(): void {
//   }
//   showElements: boolean = false;
//   showListElements: boolean = false;
//   selectCurrentUser(user:any){ console.log("hi",user);this.currentUser=user;
//    this.showMainPage=false;this.showDetailsDisplayPage=true;}
//   showElements1: boolean = false;
//   showListElements1: boolean = false;
// }