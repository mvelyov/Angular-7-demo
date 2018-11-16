import { Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ReposComponent } from './repos/repos.component';
import { UserDetailsComponent, UsersComponent } from './users';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', children: [
    { path: '', component: UsersComponent },
    { path: ':username/details', component: UserDetailsComponent },
  ]},
  { path: 'repositories', component: ReposComponent },
  { path: '**', component: NotFoundComponent },
];
