import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input() libroTrovato: Array<Libro>;
  @Input() archivio: Archivio;
  @Output() updateView = new EventEmitter<string>();
  view: string = 'viewRisultati';

  constructor(private as: archivio_service) {}

  ngOnInit() {}

  restituzione() {
    this.archivio.restituzione_libro(this.libroTrovato[0]);
    //aggiorno il nuovo archivio sul server
    this.archivio.aggiorna_archivio(this.as);
    this.updateView.emit('viewHome');
  }

  prestito() {
    var input: HTMLInputElement = document.getElementById(
      'prestito'
    ) as HTMLInputElement;
    var nomePrestito = input.value;
    this.archivio.prestito_libro(this.libroTrovato[0], nomePrestito);
    //aggiorno il nuovo archivio sul server
    this.archivio.aggiorna_archivio(this.as);
    this.updateView.emit('viewHome');
  }
}
