import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class ParticipantService {
  constructor(private http: HttpClient) {
  }
  getAll(): Observable<any> {
    return this.http.get('//hyttetur-fagerholm.1d35.starter-us-east-1.openshiftapps.com/gjesteliste');
  }
}
