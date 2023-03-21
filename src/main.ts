import 'zone.js/dist/zone';
import { Component, SimpleChange } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <p>{{this.element}}</p>
  `,
})
export class App {
  name = 'Angular';
  element = '';
  constructor() {
    this.element += ' constructor:::\n';
  }
  ngOnInit() {
    this.element += ' on init  ';
    this.name = 'vinoth';
  }
  ngOnChanges(changes: SimpleChange) {
    this.element += ' on changes ';
  }
  ngDoCheck() {
    this.element += ' do check ';
  }
  ngAfterContentInit() {
    this.element += ' content init ';
  }
  ngAfterContentChecked() {
    this.element += ' content checked ';
  }
  ngAfterViewInit() {
    this.element += ' view init ';
  }
  ngAfterViewChecked() {
    this.element += ' view checked ';
  }
  ngOnDestroy() {
    this.element += ' Destroy ';
  }
}

bootstrapApplication(App);
