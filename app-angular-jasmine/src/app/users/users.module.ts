import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UserAddComponent } from './user-add/user-add.component';
import { UserShowComponent } from './user-show/user-show.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersRoutingModule } from './users-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule,
  ],
  declarations: [
    UserAddComponent,
    UserShowComponent,
    UsersListComponent,
  ],
})
export class UsersModule { }
