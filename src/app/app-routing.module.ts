import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AddDetailsFormComponent } from './add-details-form/add-details-form.component';
import { DetailsDisplayPageComponent } from './details-display-page/details-display-page.component';


const routes: Routes = [
  { path: 'App', component: AppComponent },
  {path:'welcomepage',component:WelcomePageComponent},
  {path: '', redirectTo: '/welcomepage', pathMatch:'full'},
  {path:'loginpage',component:LoginPageComponent},
  {path:'signuppage',component:SignupPageComponent},
  {path:'mainpage',component:MainPageComponent},
  {path:'adddetailsform',component:AddDetailsFormComponent},
  {path:'detailsdisplaypage/:id',component:DetailsDisplayPageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


