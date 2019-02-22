import { Injectable } from '@angular/core';
import { Library2Service } from "library2";

@Injectable({
  providedIn: 'root'
})
export class Library1Service {

  get version() {
    return 'version: dev';
  }

  get name() {
    return 'app name: Library 1';
  }

  constructor(lib: Library2Service) {
    lib.toString();
  }
}
