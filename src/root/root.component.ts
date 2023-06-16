import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RicercaComponent } from './ricerca/ricerca.component';
import { InserimentoComponent } from './inserimento/inserimento.component';
import { Archivio } from './archivio';
import { archivio_service } from './archivio.service';
import { AjaxResponse } from 'rxjs/ajax';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
  standalone: true,
  imports: [CommonModule, RicercaComponent, InserimentoComponent],
})
export class RootComponent implements OnInit {
  view: string = 'viewHome';
  archivio: Archivio;

  cambioView(name: string) {
    this.view = name;
  }

  constructor(private as: archivio_service) {}

  ngOnInit() {
    this.as.getData().subscribe({
      next: (x: AjaxResponse<any>) => {
        this.archivio = new Archivio(JSON.parse(x.response));
      },
      error: (err) =>
        console.error('Observer got an error: ' + JSON.stringify(err)),
    });
  }
}
