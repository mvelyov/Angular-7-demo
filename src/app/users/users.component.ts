import { Component, OnInit } from '@angular/core';
import { IPublicUserDetails } from '../core/models/users/users-public-details.model';
import { UsersService } from './../core/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  public users: IPublicUserDetails[];
  public allUsers: IPublicUserDetails[];
  public userDetails;

  constructor(private usersService: UsersService) { }

  public ngOnInit(): void {
    this.usersService.getAllUsers()
                     .subscribe((users: IPublicUserDetails[]) => {
                       this.users = users;
                       this.allUsers = users;
                      });
  }

  public onSelectUser(username: string): void {
    this.usersService.selectedUsername = username;
  }

  public onFindUser(username: string): void {
    if (username) {
      const filterUsersByUsername = this.allUsers.filter((user) => {
        if ((user.login).includes(username)) {
          return user;
        }
      });
      this.users = filterUsersByUsername;
    } else {
      this.users = this.allUsers;
    }
  }
}
