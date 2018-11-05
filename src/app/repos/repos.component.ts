import { Component, OnInit } from '@angular/core';
import { ReposService } from './../core/repos/repos.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css'],
})
export class ReposComponent implements OnInit {
  public repos;

  constructor(private reposService: ReposService) { }

  public ngOnInit(): void {
    this.reposService.getAllRepos()
                     .subscribe((repos) => this.repos = repos);
  }

}
