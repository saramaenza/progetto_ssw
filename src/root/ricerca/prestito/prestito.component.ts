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

  constructor(private as: archivio_service) {}

  ngOnInit() {}

  restituzione() {
    this.archivio.restituzione_libro(this.libroTrovato[0]);
    this.archivio.aggiorna_archivio(this.as);
    this.aggiornaView.emit('viewHome');
  }

  prestito() {
    let stringaInput = (document.getElementById('prestito') as HTMLInputElement)
      .value;
    this.archivio.prestito_libro(this.libroTrovato[0], stringaInput);
    this.archivio.aggiorna_archivio(this.as);
    this.aggiornaView.emit('viewHome');
  }
}
