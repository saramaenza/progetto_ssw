import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input() libroTrovato: Array<Libro>;
  @Input() archivio: Archivio;
  @Output() aggiornaView = new EventEmitter<string>();
  view: string = 'viewRisultati';

  constructor() {}

  ngOnInit() {}

  restituzione() {
    this.archivio.restituisci_libro(this.libroTrovato[0]);
    //aggiorno la view alla home
    this.aggiornaView.emit('viewHome');
  }

  prestito() {
    let stringaInput = (document.getElementById('prestito') as HTMLInputElement)
      .value;
    this.archivio.prestito_libro(this.libroTrovato[0], stringaInput);
    this.aggiornaView.emit('viewHome');
  }
}
