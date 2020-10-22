import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SelectComponent } from './select/select.component';
import { UserlistComponent } from './userlist/userlist.component';
import { MatterlistComponent } from './matterlist/matterlist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { UserSearchModalComponent } from './user-search-modal/user-search-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AlertDialogComponent }  from './alert-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SelectComponent,
    UserlistComponent,
    MatterlistComponent,
    UserSearchModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
