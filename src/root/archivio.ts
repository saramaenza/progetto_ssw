import { Libro } from './libro';

export class Archivio {
  archivio: Array<Libro> = [];
  constructor(archivio) {
    this.archivio = archivio;
  }
  ricerca_libro() {}

  inserisci_libro(libro: Libro) {
    this.archivio.push(libro);
  }
}
