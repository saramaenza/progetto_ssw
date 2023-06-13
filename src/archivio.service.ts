import { Injectable } from '@angular/core';
import { ajax, AjaxResponse, AjaxError } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root',
})
export class archivio_service {
  URL: string =
    'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint/';
  key: string = '9f3bb77e';

  constructor() {}

  //recupero il valore collegato alla chiave
  getValue() {
    //observable con la funzione ajax
    const obs = ajax({
      //spedisco una richiesta http con get
      method: 'GET',
      url: this.URL + '/get?key=' + this.key,
      crossDomain: true,
    });
    obs.subscribe({
      //la richiesta ha successo
      next: (res: AjaxResponse<any>) => {
        //il risultato viene stampato
        document.getElementById('output').innerHTML = res.response;
      },
      error: (err: AjaxError) => console.error(err.response),
    });
  }

  //acquisisce i dati che stanno nella input text
  setValue() {
    console.log(document.getElementById('data'));
    //nuovo observable ajax con metodo post, perchè voglio impostare un nuovo valore in corrispondenza della chiave
    const obs = ajax({
      method: 'POST',
      url: URL + '/set?key=' + this.key,
      crossDomain: true,
      //passiamo il dato che abbiamo inserito nella input text
      body: document.getElementById('data').value,
    });
    obs.subscribe({
      next: (res: AjaxResponse<any>) => {
        document.getElementById('output').innerHTML = 'Ok!';
      },
      error: (err: AjaxError) => console.error(err.response),
    });
  }
}
