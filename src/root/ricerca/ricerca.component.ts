import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class RicercaComponent implements OnInit {
  @Output() updateView = new EventEmitter<string>();
  view: string = 'viewRicerca';

  newView(name: string) {
    this.view = name;
    this.updateView.emit(this.view);
  }

  constructor() {}

  ngOnInit() {}
  newBook() {
    var input: HTMLInputElement = document.getElementById(
      'nuovo'
    ) as HTMLInputElement;
    input.value = '';
  }
}
