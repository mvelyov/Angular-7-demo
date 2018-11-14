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
  public userRepos;
  public allUserRepos;
  public languages;
  public filterByLanguage: string = '';

  get username(): string {
    return this.usersService.selectedUsername;
  }

  constructor(private usersService: UsersService, private router: Router) {}

  public ngOnInit(): void {
    this.usersService.getUserDetails(this.username)
                     .subscribe((user: IUser) => {
                       this.selectedUser = user;
                     });

    this.usersService.getUserRepos(this.username)
                     .subscribe((repos) => {
                       this.userRepos = repos;
                       this.allUserRepos = repos;
                     });
  }

  public onBackToUsers(): void {
    this.router.navigate(['users']);
  }

  public onFilterByLanguage(): void {
    const filteredUserRepos = this.allUserRepos.filter((repo) => {
      if (repo.language) {
      return repo.language.toLowerCase() === this.filterByLanguage;
      }
    });
    this.userRepos = filteredUserRepos;
  }

  public onResetFilter(): void {
    this.filterByLanguage = '';
    this.usersService.getUserRepos(this.username)
    .subscribe((repos) => {
      this.userRepos = repos;
    });
  }
}
