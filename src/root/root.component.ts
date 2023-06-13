import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RicercaComponent } from './ricerca/ricerca.component';
import { InserimentoComponent } from './inserimento/inserimento.component';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
  standalone: true,
  imports: [CommonModule, RicercaComponent, InserimentoComponent],
})
export class RootComponent implements OnInit {
  view: string = 'viewHome';

  newView(name: string) {
    this.view = name;
  }

  constructor() {}

  ngOnInit() {}
}
