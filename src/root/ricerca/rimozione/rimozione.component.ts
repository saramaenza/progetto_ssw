import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input() libroTrovato: Array<Libro>;
  @Input() archivio: Archivio;
  @Output() aggiornaView = new EventEmitter<string>();
  view: string = '';

  ngOnInit() {}

  rimozione() {
    this.archivio.rimuovi_libro(this.libroTrovato[0].posizione, this.as);
  }
}
