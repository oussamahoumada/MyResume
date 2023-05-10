import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }
  readonly projectsUrl: string = "assets/data/projects.json";
  getProjects() {
    return this.http.get<any[]>(this.projectsUrl);
  }
}
