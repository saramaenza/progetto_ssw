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
  @Output() updateView = new EventEmitter<string>();
  view: string = 'viewRisultati';

  constructor(private as: archivio_service) {}

  ngOnInit() {}

  restituzione() {
    //download dell'archivio
    this.as.getData().subscribe({
      next: (x: AjaxResponse<any>) => {
        let archivio: Archivio = new Archivio(JSON.parse(x.response));

        archivio.restituzione_libro(this.libroTrovato[0]);
        //aggiorno il nuovo archivio sul server
        archivio.aggiorna_archivio(this.as);
      },
      error: (err) =>
        console.error('Observer got an error: ' + JSON.stringify(err)),
    });
    this.updateView.emit('viewHome');
  }

  prestito() {
    var input: HTMLInputElement = document.getElementById(
      'prestito'
    ) as HTMLInputElement;
    var nomePrestito = input.value;
    //download dell'archivio
    this.as.getData().subscribe({
      next: (x: AjaxResponse<any>) => {
        let archivio: Archivio = new Archivio(JSON.parse(x.response));
        archivio.prestito_libro(this.libroTrovato[0], nomePrestito);
        //aggiorno il nuovo archivio sul server
        archivio.aggiorna_archivio(this.as);
      },
      error: (err) =>
        console.error('Observer got an error: ' + JSON.stringify(err)),
    });
    this.updateView.emit('viewHome');
  }
}
