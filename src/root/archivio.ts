import { Libro } from './libro';

export class Archivio {
  archivio: Array<Libro> = [];

  constructor(archivio) {
    this.archivio = archivio;
  }

  ricerca_libro(stringa: string) {
    return this.archivio.filter((libro) =>
      (libro.titolo + ' ' + libro.autore)
        .toLowerCase()
        .includes(stringa.toLowerCase())
    );
  }

  inserimento_libro(libro: Libro) {
    this.archivio.push(libro);
  }

  rimozione_libro(libro: Libro) {
    return this.archivio.filter((item) => item.posizione != libro.posizione);
  }

  restituzione_libro(libro: Libro) {
    this.archivio.filter((x) => {
      if (x.posizione === libro.posizione) {
        x.utente = '';
      }
    });
  }

  prestito_libro(libro: Libro, nomePrestito: string) {
    this.archivio.map((x) => {
      if (x.posizione === libro.posizione) {
        x.utente = nomePrestito;
      }
    });
  }
}
