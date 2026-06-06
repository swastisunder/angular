import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  count = 0;

  dec() {
    if (this.count > 0) this.count--;
  }

  reset() {
    this.count = 0;
  }

  inc() {
    this.count++;
  }
}
