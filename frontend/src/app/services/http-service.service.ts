import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private HTTP_URL: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getResults(path: string): Observable<any> {
    return this.http.get<any>(`${this.HTTP_URL}${path}`);
  }
}
