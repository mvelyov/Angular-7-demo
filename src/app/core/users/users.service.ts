import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IPublicUser } from '../../models/public-user.model';
import { RequesterService } from '../requester/requester.service';
import { accessToken } from './../../../../authentication';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  public users: IPublicUser[];
  public selectedUsername: string;

  private usersApiUrl: string = 'users';
  private headers: HttpHeaders =  new HttpHeaders().set( 'Authorization', accessToken);
  constructor(private requester: RequesterService) { }

  public getAllUsers(): Observable<IPublicUser[]> {
    if (this.users) {
      return of(this.users);
    }
    return this.requester.get(this.usersApiUrl, this.headers)
                         .pipe(
                          tap((data: IPublicUser[]) => {
                            this.users = data;
                            console.log('get data from github');
                          }));
  }

  public getUserDetails(username: string): Observable<{}> {
    const userDetailsApiUrl: string = `${this.usersApiUrl}/${username}`;
    return this.requester.get(userDetailsApiUrl, this.headers);
  }
}
