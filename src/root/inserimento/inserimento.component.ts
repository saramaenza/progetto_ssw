import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Libro } from '../libro';
import { Archivio } from '../archivio';
import { archivio_service } from 'src/archivio.service';
import { AjaxResponse } from 'rxjs/ajax';

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

  constructor(private as: archivio_service) {}

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

    let libro = new Libro(newTitolo, newAutore, newPosizione, '');

    this.as.getData().subscribe({
      next: (x: AjaxResponse<any>) => {
        console.log('x:', x.response);
      },
      error: (err) =>
        console.error('Observer got an error: ' + JSON.stringify(err)),
    });
  }
}
