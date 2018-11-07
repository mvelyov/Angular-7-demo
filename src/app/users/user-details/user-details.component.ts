import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from './../../core/users/users.service';
import { IUser } from './../../models/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  public selectedUser: IUser;

  get username(): string {
    return this.usersService.selectedUsername;
  }

  constructor(private usersService: UsersService, private router: Router) {}

  public ngOnInit(): void {
    this.usersService.getUserDetails(this.username)
                     .subscribe((user: IUser) => {
                       this.selectedUser = user;
                     });
  }

  public onBackToUser(): void {
    this.router.navigate(['users']);
  }
}
