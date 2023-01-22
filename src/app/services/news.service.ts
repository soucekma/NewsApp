import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }


  getTopNews(lang: string): Observable<any> {
    return this.http.get(`${environment.baseUrl}/top-headlines?country=${lang}&pages=100&apiKey=${environment.apiKey}`);
  }
  getSearchNews(searchValue: string): Observable<any>{
    return this.http.get(`${environment.baseUrl}/everything?q=${searchValue}&apiKey=${environment.apiKey}`);
  }



}

