import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { accessToken } from '../../../../authentication';
import { RequesterService } from './../requester/requester.service';

@Injectable({
  providedIn: 'root',
})
export class ReposService {
  private reposApiUrl: string = 'repositories';
  private headers: HttpHeaders =  new HttpHeaders().set( 'Authorization', accessToken);

  constructor(private requesterService: RequesterService) {}

  public getAllRepos(): Observable<{}> {
    return this.requesterService.get(this.reposApiUrl, this.headers);
  }
}
