import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Libro } from '../libro';
import { Archivio } from '../archivio';
import { archivio_service } from '../archivio.service';

@Component({
  selector: 'app-inserimento',
  templateUrl: './inserimento.component.html',
  styleUrls: ['./inserimento.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class InserimentoComponent implements OnInit {
  @Output() aggiornaView = new EventEmitter<string>();
  @Input() archivio: Archivio;
  view: string = 'viewInserimento';

  constructor() {}

  ngOnInit() {}

  //funzione per aggiornare la view
  cambioView(view: string) {
    this.view = view;
    this.aggiornaView.emit(this.view);
  }

  nuovoLibro() {
    //recupero dei valori forniti in input
    let nuovoAutore = (
      document.getElementById('nuovoAutore') as HTMLInputElement
    ).value;
    let nuovoTitolo = (
      document.getElementById('nuovoTitolo') as HTMLInputElement
    ).value;
    let nuovaPosizione = (
      document.getElementById('nuovaPosizione') as HTMLInputElement
    ).value;
    let newLibro = new Libro(nuovoTitolo, nuovoAutore, nuovaPosizione, '');
    //verifica che il libro inserito non ricopra una posizione già occupata. Se la posizione è libera allora viene aggiunto il nuovo libro in archivio
    if (
      !this.archivio.archivio.some((item) => item.posizione === nuovaPosizione)
    ) {
      this.archivio.inserisci_libro(newLibro);
    } else {
      console.log('Posizione già occupata');
    }
  }
}
