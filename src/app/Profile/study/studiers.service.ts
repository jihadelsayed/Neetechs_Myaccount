import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class StudiersService {

  currentUsername="";



  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getAllStudiers(currentUsername): Observable<any> {
    return this.http.get(environment.SERVER_URL + 'api/profile/Studiers?site_id='+currentUsername,{ headers: this.httpHeaders });
  }

}
