import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './Users/user.component';
import { UserService } from './services/user.service';
import { DialogComponent } from './dialog/dialog.component';
import { CommonModule } from '@angular/common';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { UserViewComponent } from '../app/user-view/user-view.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    DialogComponent,
    UserViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
  ],
  entryComponents: [ 
    DialogComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
