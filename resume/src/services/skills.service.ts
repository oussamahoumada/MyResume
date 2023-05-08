import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private http: HttpClient) { }
  readonly skillsUrl: string = "assets/data/skills.json";
  getSkills() {
    return this.http.get<any>(this.skillsUrl);
  }
}
