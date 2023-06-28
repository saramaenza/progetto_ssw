import { archivio_service } from './archivio.service';
import { Libro } from './libro';

export class Archivio {
  archivio: Array<Libro> = [];

  constructor(archivio: Libro[], private as: archivio_service) {
    this.archivio = archivio;
  }

  ricerca_libro(stringa: string) {
    return this.archivio.filter((libro) =>
      (libro.titolo + ' ' + libro.autore)
        .toLowerCase()
        .includes(stringa.toLowerCase())
    );
  }

  inserisci_libro(libro: Libro) {
    this.archivio.push(libro);
    this.aggiorna_archivio();
  }

  rimuovi_libro(posizione: string) {
    this.archivio = this.archivio.filter(
      (libro) => libro.posizione !== posizione
    );
    this.aggiorna_archivio();
  }

  restituisci_libro(libro: Libro) {
    this.archivio.filter((x) => {
      if (x.posizione === libro.posizione) {
        x.utente = '';
      }
    });
    this.aggiorna_archivio();
  }

  prestito_libro(libro: Libro, nomePrestito: string) {
    this.archivio.filter((x) => {
      if (x.posizione === libro.posizione) {
        x.utente = nomePrestito;
      }
    });
    this.aggiorna_archivio();
  }

  aggiorna_archivio() {
    this.as.setData(JSON.stringify(this.archivio)).subscribe({
      next: () => console.log('Archivio aggiornato!'),
      error: (err) =>
        console.log('Observer got an error: ' + JSON.stringify(err)),
    });
  }
}
