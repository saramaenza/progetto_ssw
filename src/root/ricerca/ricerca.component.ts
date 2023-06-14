import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { archivio_service } from '../archivio.service';
import { AjaxResponse } from 'rxjs/ajax';
import { Archivio } from '../archivio';
import { Libro } from '../libro';

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

  constructor(private as: archivio_service) {}

  ngOnInit() {}

  newView(name: string) {
    this.view = name;
    this.updateView.emit(this.view);
  }

  numero: string = '';

  cerca() {
    //acquisizione della stringa digitata
    var input: HTMLInputElement = document.getElementById(
      'stringa'
    ) as HTMLInputElement;
    var stringa = input.value;
    console.log(stringa);

    this.numero = stringa;

    //download dell'archivio
    this.as.getData().subscribe({
      next: (x: AjaxResponse<any>) => {
        let archivio: Archivio = new Archivio(JSON.parse(x.response));

        console.log('RICERCA', archivio.ricerca_libro(stringa));
      },
      error: (err) =>
        console.error('Observer got an error: ' + JSON.stringify(err)),
    });
  }
}
