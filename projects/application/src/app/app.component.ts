import { Component } from '@angular/core';
import { Library2Service } from "library2";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(lib:Library2Service) {
    lib.toString();
  }
}
