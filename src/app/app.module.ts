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
import { UserSearchModalComponent } from './modals/user-search-modal/user-search-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDetailModalComponent } from './modals/user-detail-modal/user-detail-modal.component';
import { UserAddModalComponent } from './modals/user-add-modal/user-add-modal.component';
import { MatterSearchModalComponent } from './modals/matter-search-modal/matter-search-modal.component';
import { MatterAddModalComponent } from './modals/matter-add-modal/matter-add-modal.component';
// import { AlertDialogComponent }  from './alert-dialog.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SelectComponent,
    UserlistComponent,
    MatterlistComponent,
    UserSearchModalComponent,
    UserDetailModalComponent,
    UserAddModalComponent,
    MatterSearchModalComponent,
    MatterAddModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
