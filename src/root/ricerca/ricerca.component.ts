import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { archivio_service } from '../archivio.service';
import { AjaxResponse } from 'rxjs/ajax';
import { Archivio } from '../archivio';
import { PrestitoComponent } from './prestito/prestito.component';
import { Libro } from '../libro';
import { RimozioneComponent } from './rimozione/rimozione.component';

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css'],
  imports: [CommonModule, PrestitoComponent, RimozioneComponent],
  standalone: true,
})
export class RicercaComponent implements OnInit {
  @Output() updateView = new EventEmitter<string>();
  @Input() archivio: Archivio;
  view: string = 'viewRicerca';
  numero: number = 0;
  libroTrovato: Array<Libro> = [];

  constructor(private as: archivio_service) {}

  ngOnInit() {}

  newView(name: string) {
    this.view = name;
    this.updateView.emit(this.view);
  }

  cerca() {
    //acquisizione della stringa digitata
    var input: HTMLInputElement = document.getElementById(
      'stringa'
    ) as HTMLInputElement;
    var stringa = input.value;
    let trovati = this.archivio.ricerca_libro(stringa);
    if (stringa.length > 0) {
      this.numero = trovati.length;
    } else {
      this.numero = 0;
    }
    if (this.numero === 1) {
      this.view = 'viewRisultato';
      this.libroTrovato.push(trovati[0]);
    }
  }
}
