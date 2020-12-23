import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConnectorService {

  namesUrl = "http://localhost:3000/names"

  constructor(private http: HttpClient) { }

  public getAllNames(){
    return this.http.get(this.namesUrl);
  }
}
