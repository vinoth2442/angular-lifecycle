import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{name}}!</h1>
  `,
})
export class App {
  name = 'Angular';
  constructor(){
    console.log( "constructor")
  }
  ngOnInit(){
    console.log( "on init")

  }
}

bootstrapApplication(App);