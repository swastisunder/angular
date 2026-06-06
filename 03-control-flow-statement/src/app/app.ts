import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  display = true;

  color = 1;

  toggle() {
    this.display = !this.display;
  }

  handelInput(event: Event) {
    this.color = parseInt((event.target as HTMLInputElement).value);
  }
}
