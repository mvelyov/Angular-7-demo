import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequesterService } from './../requester/requester.service';

@Injectable({
  providedIn: 'root',
})
export class ReposService {
  private reposApiUrl: string = 'repositories';
  private headers: HttpHeaders =  new HttpHeaders().set( 'Authorization', 'Bearer 9c734f3368be2866b09aadc5a05780630092f6ea');

  constructor(private requesterService: RequesterService) {}

  public getAllRepos(): Observable<{}> {
    return this.requesterService.get(this.reposApiUrl, this.headers);
  }
}
