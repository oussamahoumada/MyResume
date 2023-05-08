import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  public dateNaissance: Date = new Date("1998/08/30");
  public now: Date = new Date();
  public age: number = this.now.getFullYear() - this.dateNaissance.getFullYear() - 1;

}
