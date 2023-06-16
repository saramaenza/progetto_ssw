import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AjaxResponse } from 'rxjs/ajax';
import { Archivio } from '../../archivio';
import { archivio_service } from '../../archivio.service';
import { Libro } from '../../libro';

@Component({
  selector: 'app-rimozione',
  templateUrl: './rimozione.component.html',
  styleUrls: ['./rimozione.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class RimozioneComponent implements OnInit {
  constructor(private as: archivio_service) {}
  @Input() utenteTrovato: string;
  @Input() libroTrovato: Array<Libro>;
  @Output() updateView = new EventEmitter<string>();
  view: string = '';

  ngOnInit() {}

  rimozione() {
    this.as.getData().subscribe({
      next: (x: AjaxResponse<any>) => {
        //recupero dal server dell'archivio
        let archivio: Archivio = new Archivio(JSON.parse(x.response));
        let nuovoArchivio: Archivio = new Archivio(
          archivio.rimuovi_libro(this.libroTrovato[0])
        );
        //aggiorno il nuovo archivio sul server
        this.as.setData(JSON.stringify(nuovoArchivio)).subscribe({
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
    this.updateView.emit('viewHome');
  }
}
