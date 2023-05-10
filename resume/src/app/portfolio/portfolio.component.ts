import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailsComponent } from './details/details.component';
import { ProjectsService } from 'src/services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  public projectList: any;
  constructor(private dialog: MatDialog, private servise: ProjectsService) {
    this.servise.getProjects().subscribe(res => {
      this.projectList = res;
    });
  }

  openDialog(item : any) {
    this.dialog.open(DetailsComponent, { data:item });
  }

  test(item: string) {
    if (item == "all") {
      this.servise.getProjects().subscribe(res => {
        this.projectList = res;
      });
    } else {
       this.servise.getProjects().subscribe(res => {
        this.projectList = res.filter(fil => fil.fltr == item);
      });
    }
  }
}
