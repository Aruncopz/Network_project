// // import { Component, OnInit } from '@angular/core';
// // // import { FormControl, FormGroup } from '@angular/forms';
// // import { MatSliderChange } from '@angular/material/slider';
// // import { FormGroup, FormControl, Validators } from '@angular/forms'
// // import { Router } from '@angular/router';
// // import { __values } from 'tslib';

 
// // @Component({
// //   selector: 'app-signup-page',
// //   templateUrl: './signup-page.component.html',
// //   styleUrls: ['./signup-page.component.css']
// // })
// // export class SignupPageComponent  implements OnInit {
  
  
  
// //   signupform!: FormGroup; 
// //   constructor(private router: Router) {}

// //   ngOnInit(): void { 
// //     this.signupform = new FormGroup({
// //       'mail' : new FormControl(),
// //       'username' : new FormControl(null),
// //            'pw' : new FormControl(null),
// //     });
// //   }
  
// //   goTomainpage() {  

// //     this.router.navigate(['./mainpage']);
// //   }
// //  onSubmit(){
// //  localStorage.setItem('User', JSON.stringify(this.signupform.value));
// // this.signupform.reset();
// // this.goTomainpage();

// //  }

// }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

} 