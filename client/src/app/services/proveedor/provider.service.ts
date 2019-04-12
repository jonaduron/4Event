import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  API_URI='http://localhost:3000';

  constructor(private http: HttpClient) { }

  getProviders() {
    return this.http.get(`${this.API_URI}/providers`);
  }

}
