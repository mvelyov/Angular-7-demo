import { Component, OnInit } from '@angular/core';
import { IPublicUser } from '../models/public-user.model';
import { UsersService } from './../core/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  public users: IPublicUser;
  public userDetails;

  constructor(private usersService: UsersService) { }

  public ngOnInit(): void {
    this.usersService.getAllUsers()
                     .subscribe((users: IPublicUser) => {
                       this.users = users;
                      });
  }

  public onGetDetails(userName: string): void {
    this.usersService.getUserDetails(userName)
                     .subscribe((userDetails) => {
                       this.userDetails = userDetails;
                     });
  }

}
