import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { accessToken } from '../../../../authentication';
import { IReposPublicDetails } from '../models/repos/repos-public-details';
import { RequesterService } from './../requester/requester.service';

@Injectable({
  providedIn: 'root',
})
export class ReposService {
  public repos: IReposPublicDetails[];
  private reposApiUrl: string = 'repositories';
  private headers: HttpHeaders =  new HttpHeaders().set( 'Authorization', accessToken);

  constructor(private requesterService: RequesterService) {}

  public getAllRepos(): Observable<IReposPublicDetails[]> {
    if (this.repos) {
      return of(this.repos);
    }
    return this.requesterService.get(this.reposApiUrl, this.headers)
                                .pipe(
                                  tap((repos: IReposPublicDetails[]) => {
                                    console.log('get repos from github');
                                    this.repos = repos;
                                  }),
                                );
  }
}
