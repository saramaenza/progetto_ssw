import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AjaxResponse } from 'rxjs/ajax';
import { Libro } from '../../libro';
import { Archivio } from '../../archivio';
import { archivio_service } from '../../archivio.service';

@Component({
  selector: 'app-prestito',
  templateUrl: './prestito.component.html',
  styleUrls: ['./prestito.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class PrestitoComponent implements OnInit {
  @Input() utenteTrovato: string;
  @Input() libroTrovato: Array<Libro>;

  constructor(private as: archivio_service) {}

  ngOnInit() {}

  restituzione() {
    //download dell'archivio
    this.as.getData().subscribe({
      next: (x: AjaxResponse<any>) => {
        let archivio: Archivio = new Archivio(JSON.parse(x.response).archivio);
        //cancello il nominativo dell'utente del libro
        archivio.archivio.filter((x) => {
          if (x.utente === this.utenteTrovato) {
            x.utente = '';
            return x;
          }
        });
        //aggiorno il nuovo archivio sul server
        this.as.setData(JSON.stringify(archivio)).subscribe({
          next: () => {
            console.log('Archivio aggiornato!');
          },
          error: (err) =>
            console.error('Observer got an error: ' + JSON.stringify(err)),
        });
      },
      error: (err) =>
        console.error('Observer got an error: ' + JSON.stringify(err)),
    });
  }

  prestito() {
    console.log('prestito');
    var input: HTMLInputElement = document.getElementById(
      'prestito'
    ) as HTMLInputElement;
    var nomePrestito = input.value;
    console.log(nomePrestito);
    console.log(this.libroTrovato);

    //download dell'archivio
    this.as.getData().subscribe({
      next: (x: AjaxResponse<any>) => {
        let archivio: Archivio = new Archivio(JSON.parse(x.response).archivio);
        //aggiungo il nominativo dell'utente al libro
        archivio.archivio.map((x) => {
          if (
            '[' + JSON.stringify(x) + ']' ===
            JSON.stringify(this.libroTrovato)
          ) {
            x.utente = nomePrestito;
            return x;
          }
        });
        //aggiorno il nuovo archivio sul server
        this.as.setData(JSON.stringify(archivio)).subscribe({
          next: () => {
            console.log('Archivio aggiornato!');
          },
          error: (err) =>
            console.error('Observer got an error: ' + JSON.stringify(err)),
        });
      },
      error: (err) =>
        console.error('Observer got an error: ' + JSON.stringify(err)),
    });
  }
}
