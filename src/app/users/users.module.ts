import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersComponent } from './users.component';

@NgModule({
  declarations: [
    UserDetailsComponent,
    UsersComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule,
   ],
})
export class UsersModule { }
