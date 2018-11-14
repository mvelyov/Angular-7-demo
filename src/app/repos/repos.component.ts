import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IReposPublicDetails } from '../models/repos/repos-public-details';
import { ReposService } from './../core/repos/repos.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css'],
})
export class ReposComponent implements OnInit {
  public repos: IReposPublicDetails[];

  constructor(private reposService: ReposService) { }

  public ngOnInit(): void {
    this.reposService.getAllRepos()
                     .subscribe((repos) => {
                       this.repos = repos;
                     });
  }
}
