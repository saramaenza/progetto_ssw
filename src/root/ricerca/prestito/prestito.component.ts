import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AjaxResponse } from 'rxjs/ajax';
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

  constructor(private as: archivio_service) {}

  ngOnInit() {}

  restituzione() {
    console.log('restituisci');
    /*
    //download dell'archivio
    this.as.getData().subscribe({
      next: (x: AjaxResponse<any>) => {
        let archivio: Archivio = new Archivio(JSON.parse(x.response).archivio);
        console.log(archivio);
      },
      error: (err) =>
        console.error('Observer got an error: ' + JSON.stringify(err)),
    });*/
  }
}