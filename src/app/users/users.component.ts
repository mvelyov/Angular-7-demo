import { Component, OnInit } from '@angular/core';
import { IPublicUser } from '../models/public-user.model';
import { UsersService } from './../core/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  public users: IPublicUser[];
  public allUsers: IPublicUser[];
  public userDetails;

  constructor(private usersService: UsersService) { }

  public ngOnInit(): void {
    this.usersService.getAllUsers()
                     .subscribe((users: IPublicUser[]) => {
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
