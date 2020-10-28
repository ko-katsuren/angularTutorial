import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { SelectComponent } from './select/select.component';
import { UserlistComponent } from './userlist/userlist.component';
import { MatterlistComponent } from './matterlist/matterlist.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'select', component: SelectComponent },
  { path: 'userlist', component: UserlistComponent },
  { path: 'matterlist', component: MatterlistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
