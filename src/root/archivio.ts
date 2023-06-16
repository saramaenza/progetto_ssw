import { archivio_service } from './archivio.service';
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

  inserimento_libro(libro: Libro, as: archivio_service) {
    this.archivio.push(libro);
    this.aggiorna_archivio(as);
  }

  rimuovi_libro(posizione: string, as: archivio_service) {
    this.archivio = this.archivio.filter(
      (libro) => libro.posizione !== posizione
    );
    this.aggiorna_archivio(as);
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

  aggiorna_archivio(as) {
    as.setData(JSON.stringify(this.archivio)).subscribe({
      next: () => console.log('Archivio aggiornato!'),
      error: (err) =>
        console.log('Observer got an error: ' + JSON.stringify(err)),
    });
  }
}
