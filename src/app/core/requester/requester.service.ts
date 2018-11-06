import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RequesterService {
  private requestDomain: string = 'https://api.github.com/';

  constructor(private http: HttpClient) {}

  public get(resource: string, headers: HttpHeaders): Observable<{}> {
    const apiUrl = this.requestDomain + resource;
    return this.http.get(apiUrl, {headers});
  }
}
