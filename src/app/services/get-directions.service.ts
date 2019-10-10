import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDirectionsService {

  constructor(private http: HttpClient) {
    this.http = http;
  }

  getDirections(url: string): Observable<any> {
    // let requestUrl: string = `http://kalathur.com/getJsonData.php?url=${url}`;
  	return this.http.jsonp(url, 'callback'); 
  }
}
