import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IReposFulllDetails } from './../../core/models/repos/repos-full-details';
import { IUserFullDetails } from './../../core/models/users/users-full-details.model';
import { UsersService } from './../../core/services/users/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  public selectedUser: IUserFullDetails;
  public userRepos: IReposFulllDetails[];
  public allUserRepos: IReposFulllDetails[];
  public filterByName: string;
  public filterByLanguage: string;

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

  public onFilter(form: NgForm): void {
    const filterName = form.value.name;
    const filterLanguage = form.value.language;

    const filteredRepos = this.allUserRepos
                            .filter((repo) => {
                              if (((repo.name).toLowerCase()).includes(filterName.toLowerCase())) {
                                  return repo;
                              }
                              })
                              .filter((repo) => {
                              if (repo.language && ((repo.language).toLowerCase()).includes(filterLanguage.toLowerCase())) {
                                  return repo;
                            }
                            });
    this.userRepos = filteredRepos;
  }

  public onResetFilter(): void {
    this.filterByName = '';
    this.filterByLanguage = '';
    this.userRepos = this.allUserRepos;
  }
 }
