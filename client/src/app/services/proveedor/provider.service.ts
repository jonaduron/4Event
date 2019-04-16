import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  API_URI='http://192.168.137.207:3000';

  constructor(private http: HttpClient) { }

  getProviders() {
    return this.http.get(`${this.API_URI}/providers`);
  }

}
