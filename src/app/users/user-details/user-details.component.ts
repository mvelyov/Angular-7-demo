import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUserFullDetails } from '../../models/users/users-full-details.model';
import { UsersService } from './../../core/users/users.service';
import { IReposFulllDetails } from './../../models/repos/repos-full-details';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  public selectedUser: IUserFullDetails;
  public userRepos: IReposFulllDetails[];
  public allUserRepos: IReposFulllDetails[];
  public filterByLanguage: string = '';

  get username(): string {
    return this.usersService.selectedUsername;
  }

  constructor(private usersService: UsersService, private router: Router) {}

  public ngOnInit(): void {
    this.usersService.getUserDetails(this.username)
                     .subscribe((user: IUserFullDetails) => {
                       this.selectedUser = user;
                     });

    this.usersService.getUserRepos(this.username)
                     .subscribe((repos: IReposFulllDetails[]) => {
                       this.userRepos = repos;
                       this.allUserRepos = repos;
                     });
  }

  public onBackToUsers(): void {
    this.router.navigate(['users']);
  }

  public onFilterByLanguage(language: string): void {
    if (language) {
      const filteredUserRepos = this.allUserRepos.filter((repo) => {
        if (repo.language && (repo.language.toLowerCase()).includes(language.toLowerCase())) {
          return repo;
        }
      });
      this.userRepos = filteredUserRepos;
    } else {
      this.userRepos = this.allUserRepos;
    }
  }
}
