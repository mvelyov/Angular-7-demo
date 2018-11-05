import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { RequesterService } from '../requester/requester.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  public users;
  private usersApiUrl: string = 'users';
  private headers: HttpHeaders =  new HttpHeaders().set( 'Authorization', 'Bearer 9c734f3368be2866b09aadc5a05780630092f6ea');

  constructor(private requester: RequesterService) { }

  public getAllUsers(): Observable<{}> {
    if (this.users) {
      return of(this.users);
    }
    return this.requester.get(this.usersApiUrl, this.headers)
                         .pipe(
                          tap((data) => {
                            this.users = data;
                            console.log('request to the server');
                            // console.log(JSON.stringify(data));
                          }));
  }

  public getUserDetails(username: string): Observable<{}> {
    const userDetailsApiUrl: string = `${this.usersApiUrl}/${username}`;
    // const userDetailsApiUrl: string = this.usersApiUrl + '/' + username;
    return this.requester.get(userDetailsApiUrl, this.headers);
  }
}
