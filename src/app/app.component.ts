import { Component } from '@angular/core';
import { Library1Service } from "../../projects/library1/src/lib/library1.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular6-monorepo-experiment';

  constructor(lib1: Library1Service) {

  }
}
