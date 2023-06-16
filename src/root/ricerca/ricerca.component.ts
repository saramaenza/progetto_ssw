import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { archivio_service } from '../archivio.service';
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
  @Output() aggiornaView = new EventEmitter<string>();
  @Input() archivio: Archivio;
  view: string = 'viewRicerca';
  numeroTrovati: number = 0;
  libroTrovato: Array<Libro> = [];

  constructor(private as: archivio_service) {}

  ngOnInit() {}

  cambioView(view: string) {
    this.view = view;
    this.aggiornaView.emit(this.view);
  }

  cerca() {
    console.log(this.archivio);
    let stringaInput = (document.getElementById('stringa') as HTMLInputElement)
      .value;
    let trovati = this.archivio.ricerca_libro(stringaInput);
    this.numeroTrovati = stringaInput.length > 0 ? trovati.length : 0;
    if (this.numeroTrovati === 1) {
      this.view = 'viewRisultato';
      this.libroTrovato.push(trovati[0]);
    }
  }
}
