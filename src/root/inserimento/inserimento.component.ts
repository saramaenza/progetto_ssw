import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inserimento',
  templateUrl: './inserimento.component.html',
  styleUrls: ['./inserimento.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class InserimentoComponent implements OnInit {
  @Output() updateView = new EventEmitter<string>();
  view: string = 'viewInserimento';

  constructor() {}

  ngOnInit() {}

  newView(name: string) {
    this.view = name;
    this.updateView.emit(this.view);
  }

  newBook() {
    var inputAutore: HTMLInputElement = document.getElementById(
      'nuovoAutore'
    ) as HTMLInputElement;
    var newAutore = inputAutore.value;

    var inputTitolo: HTMLInputElement = document.getElementById(
      'nuovoTitolo'
    ) as HTMLInputElement;
    var newTitolo = inputTitolo.value;

    var inputPosizione: HTMLInputElement = document.getElementById(
      'nuovaPosizione'
    ) as HTMLInputElement;
    var newPosizione = inputPosizione.value;

    console.log(newAutore, newTitolo, newPosizione);
  }
}
