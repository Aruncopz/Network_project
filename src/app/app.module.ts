import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AddDetailsFormComponent } from './add-details-form/add-details-form.component';
import { DetailsDisplayPageComponent } from './details-display-page/details-display-page.component';
import{FormsModule} from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule } from '@angular/forms';
import { TagSelectionComponent } from './tag-selection/tag-selection.component';

import {MatIconModule} from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    LoginPageComponent,
    SignupPageComponent,
    MainPageComponent,
    AddDetailsFormComponent,
    DetailsDisplayPageComponent,
    TagSelectionComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatChipsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

