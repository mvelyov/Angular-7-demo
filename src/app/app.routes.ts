import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReposComponent } from './repos/repos.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UsersComponent } from './users/users.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', children: [
    { path: '', component: UsersComponent },
    { path: ':username/details', component: UserDetailsComponent },
  ]},
  { path: 'repositories', component: ReposComponent },
];
