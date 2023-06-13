import { Libro } from './libro';

export class Archivio {
  archivio = [];
  constructor(archivio) {
    this.archivio = archivio;
  }
  ricerca_libro() {}

  inserisci_libro(Libro) {
    this.archivio.push(Libro);
  }
}
