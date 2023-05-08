import { Component, OnInit } from '@angular/core';
import { StudiesService } from 'src/services/studies.service';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit{
  public studiesList1: any;
  public studiesList2: any;

  constructor(private service: StudiesService) {
    this.service.getstudies().subscribe(res => {
      let c = res.length;
      this.studiesList1 = res.slice(0, (c / 2));
      this.studiesList2 = res.slice((c / 2), c);
    });
  }

  ngOnInit() {

  }

}
