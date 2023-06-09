import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudiesService {

  constructor(private http: HttpClient) { }
  readonly studiesUrl: string = "assets/data/studies.json";
  getstudies() {
    return this.http.get<any>(this.studiesUrl);
  }
}
