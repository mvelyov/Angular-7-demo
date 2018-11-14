import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IPublicUserDetails } from '../../models/users/users-public-details.model';
import { RequesterService } from '../requester/requester.service';
import { accessToken } from './../../../../authentication';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  public users: IPublicUserDetails[];
  public selectedUsername: string;

  private usersApiUrl: string = 'users';
  private headers: HttpHeaders =  new HttpHeaders().set( 'Authorization', accessToken);
  constructor(private requester: RequesterService) { }

  public getAllUsers(): Observable<IPublicUserDetails[]> {
    if (this.users) {
      return of(this.users);
    }
    return this.requester.get(this.usersApiUrl, this.headers)
                         .pipe(
                          tap((data: IPublicUserDetails[]) => {
                            this.users = data;
                            console.log('get users data from github');
                          }));
  }

  public getUserDetails(username: string): Observable<{}> {
    const userDetailsApiUrl: string = `${this.usersApiUrl}/${username}`;
    return this.requester.get(userDetailsApiUrl, this.headers);
  }

  public getUserRepos(username: string): Observable<{}> {
    const userReposApiUrl: string = `${this.usersApiUrl}/${username}/repos`;
    return this.requester.get(userReposApiUrl, this.headers);
  }
}
