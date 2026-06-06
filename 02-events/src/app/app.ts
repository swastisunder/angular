import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  name = '';

  handleSumbit(event: Event, inp: HTMLInputElement) {
    this.name = inp.value;
  }

  setInp(inp: HTMLInputElement) {
    inp.value = 'SM';
  }
} 
