import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReposService } from './../core/repos/repos.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css'],
})
export class ReposComponent implements OnInit {
  public repos;

  constructor(private reposService: ReposService, private router: Router) { }

  public ngOnInit(): void {
    this.reposService.getAllRepos()
                     .subscribe((repos) => this.repos = repos);
  }
  public onScroll(): void {
    console.log('scroll down');
  }
}
