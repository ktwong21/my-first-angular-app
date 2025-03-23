import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  countValue = signal(0);

  increment() {
    this.countValue.update((value) => value + 1);
  }

  decrement() {
    this.countValue.update((value) => value - 1);
  }
  
  reset() {
    this.countValue.set(0);
  }
}
