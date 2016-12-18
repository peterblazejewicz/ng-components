import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class TeamService {

  constructor(private http: Http) { }

  get(): Observable<any[]> {
    return this.http
      .get('api/teams/')
      .map((r: Response) => r.json().data as any[]);
  }
}
