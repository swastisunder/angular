import { Component, computed, effect, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  count = signal(0);

  data: WritableSignal<number | string> = signal(5);

  a = signal(0);
  b = signal(0);

  sum = computed(() => this.a() + this.b());

  constructor() {
    effect(() => {
      console.log(`Count: ${this.count()}`);
      console.log(`Data: ${this.data()}`);
    });
  }

  inc() {
    this.count.update((value) => value + 1);
  }

  dec() {
    this.count.update((value) => value - 1);
  }

  updateData() {
    this.data.set('OMG');
  }

  calSum(ainp: HTMLInputElement, binp: HTMLInputElement) {
    this.a.set(Number(ainp.value));
    this.b.set(Number(binp.value));
  }
}
