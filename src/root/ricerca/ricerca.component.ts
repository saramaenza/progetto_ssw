import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { archivio_service } from '../archivio.service';
import { AjaxResponse } from 'rxjs/ajax';
import { Archivio } from '../archivio';
import { PrestitoComponent } from './prestito/prestito.component';

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css'],
  imports: [CommonModule, PrestitoComponent],
  standalone: true,
})
export class RicercaComponent implements OnInit {
  @Output() updateView = new EventEmitter<string>();
  view: string = 'viewRicerca';
  numero: number = 0;
  titoloTrovato: string = '';
  autoreTrovato: string = '';
  posizioneTrovato: string = '';
  utente: string = '';
  utenteTrovato: string = '';

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

    //download dell'archivio
    this.as.getData().subscribe({
      next: (x: AjaxResponse<any>) => {
        let archivio: Archivio = new Archivio(JSON.parse(x.response).archivio);
        let trovati = archivio.ricerca_libro(stringa);

        if (stringa.length > 0) {
          this.numero = trovati.length;
        } else {
          this.numero = 0;
        }
        if (this.numero == 1) {
          this.view = 'viewRisultato';
          this.titoloTrovato = trovati[0].titolo;
          this.autoreTrovato = trovati[0].autore;
          this.posizioneTrovato = trovati[0].posizione;
          this.utenteTrovato = trovati[0].utente;
        }
      },
      error: (err) =>
        console.error('Observer got an error: ' + JSON.stringify(err)),
    });
  }
}
