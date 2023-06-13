export class Libro {
  titolo: string;
  autore: string;
  posizione: string;
  utente: string;
  constructor(
    titolo: string,
    autore: string,
    posizione: string,
    utente: string
  ) {
    this.titolo = titolo;
    this.autore = autore;
    this.posizione = posizione;
    this.utente = utente;
  }
}
