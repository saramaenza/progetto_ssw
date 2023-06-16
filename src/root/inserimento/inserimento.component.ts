import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Libro } from '../libro';
import { Archivio } from '../archivio';
import { archivio_service } from '../archivio.service';
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
  @Input() archivio: Archivio;
  view: string = 'viewInserimento';

  constructor(private as: archivio_service) {}

  ngOnInit() {}

  newView(name: string) {
    this.view = name;
    this.updateView.emit(this.view);
  }

  newBook() {
    //recupero dei valori dal form
    var inputAutore = document.getElementById(
      'nuovoAutore'
    ) as HTMLInputElement;
    var newAutore = inputAutore.value;

    var inputTitolo = document.getElementById(
      'nuovoTitolo'
    ) as HTMLInputElement;
    const newTitolo = inputTitolo.value;

    var inputPosizione = document.getElementById(
      'nuovaPosizione'
    ) as HTMLInputElement;
    var newPosizione = inputPosizione.value;

    let newLibro = new Libro(newTitolo, newAutore, newPosizione, '');

    if (!JSON.stringify(this.archivio).includes(newPosizione)) {
      //aggiungo il nuovo libro in archivio
      this.archivio.inserimento_libro(newLibro);
      //aggiorno il nuovo archivio sul server
      this.archivio.aggiorna_archivio(this.as);
    } else {
      console.log('Posizione già occupata');
    }
  }
}
