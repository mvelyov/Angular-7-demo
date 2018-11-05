import { Component, OnInit } from '@angular/core';
import { UsersService } from './../core/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  public users;
  public userDetails;

  constructor(private usersService: UsersService) { }

  public ngOnInit(): void {
    this.usersService.getAllUsers()
                     .subscribe((users) => {
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
