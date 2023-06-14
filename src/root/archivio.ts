import { Libro } from './libro';

export class Archivio {
  archivio: Array<Libro> = [];

  constructor(archivio) {
    this.archivio = archivio;
  }

  ricerca_libro(stringa: string) {
    let trovati = this.archivio.filter((libro) =>
      (libro.titolo + ' ' + libro.autore).toLowerCase().includes(stringa)
    );
    return trovati;
  }

  inserisci_libro(libro: Libro) {
    this.archivio.push(libro);
  }
}
