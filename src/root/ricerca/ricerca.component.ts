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

  constructor() {}

  ngOnInit() {}

  newView(name: string) {
    this.view = name;
    this.updateView.emit(this.view);
  }

  cerca() {
    //recupero valore input
    var input: HTMLInputElement = document.getElementById(
      'stringa'
    ) as HTMLInputElement;
    var stringa = input.value;
    console.log(stringa);
  }
}
