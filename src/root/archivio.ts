import { archivio_service } from './archivio.service';
import { Libro } from './libro';

export class Archivio {
  archivio: Array<Libro> = [];

  constructor(archivio: Libro[]) {
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

  restituzione_libro(libro: Libro, as: archivio_service) {
    this.archivio.filter((x) => {
      if (x.posizione === libro.posizione) {
        x.utente = '';
      }
    });
    this.aggiorna_archivio(as);
  }

  prestito_libro(libro: Libro, nomePrestito: string, as: archivio_service) {
    this.archivio.map((x) => {
      if (x.posizione === libro.posizione) {
        x.utente = nomePrestito;
      }
    });
    this.aggiorna_archivio(as);
  }

  aggiorna_archivio(as: archivio_service) {
    as.setData(JSON.stringify(this.archivio)).subscribe({
      next: () => console.log('Archivio aggiornato!'),
      error: (err) =>
        console.log('Observer got an error: ' + JSON.stringify(err)),
    });
  }
}
