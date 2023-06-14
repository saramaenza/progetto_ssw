import { Libro } from './libro';

export class Archivio {
  archivio: Array<Libro> = [];

  constructor(archivio) {
    this.archivio = archivio;
  }

  ricerca_libro(stringa: string) {
    console.log('STRINGA', stringa);
    let trovati = {};

    console.log(Array.isArray(this.archivio));

    /*
    let libriTrovati = libri.archivio.filter((stringa) =>
      (stringa.titolo + stringa.autore).toLowerCase().includes(stringa)
    );

    console.log(libriTrovati);

    for (let i = 0; i < this.archivio.length; i++) {
      if (
        (this.archivio[i].titolo + ' ' + this.archivio[i].autore)
          .toLowerCase()
          .includes(stringa)
      ) {
        trovati[i] = this.archivio[i].titolo;
      }
    }
    return trovati;
    */
  }

  inserisci_libro(libro: Libro) {
    this.archivio.push(libro);
  }
}
