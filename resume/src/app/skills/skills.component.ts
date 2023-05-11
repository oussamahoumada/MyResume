import { Component, OnInit } from '@angular/core';
import { SkillsService } from 'src/services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{

  public skillsList1: any;
  public skillsList2: any;
  public skillsList: any;


  constructor(private service: SkillsService) {
    this.service.getSkills().subscribe(res => {
      let c = res.length;
      this.skillsList1 = res.slice(0, (c/2));
      this.skillsList2 = res.slice((c / 2), c);
      this.skillsList  = res;
    });
  }
  ngOnInit() {

  }
}
