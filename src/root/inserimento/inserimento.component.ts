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

  constructor(private as: archivio_service) {}

  ngOnInit() {}

  cambioView(name: string) {
    this.view = name;
    this.aggiornaView.emit(this.view);
  }

  nuovoLibro() {
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
    if (!JSON.stringify(this.archivio).includes(nuovaPosizione)) {
      this.archivio.inserimento_libro(newLibro);
      this.archivio.aggiorna_archivio(this.as);
    } else {
      console.log('Posizione già occupata');
    }
  }
}
