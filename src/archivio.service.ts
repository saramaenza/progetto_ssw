import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ajax, AjaxResponse, AjaxError } from 'rxjs/ajax';

@Injectable({
  providedIn: 'any',
})
export class archivio_service {
  base: string =
    'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint/';
  key: string = '9f3bb77e';

  constructor() {}

  public getData(): Observable<AjaxResponse<any>> {
    return ajax({
      method: 'GET',
      url: this.base + '/get?key=' + this.key,
      crossDomain: true,
    });
  }

  /*
  //acquisisce i dati che stanno nella input text
  setValue() {
    console.log(document.getElementById('data'));
    //nuovo observable ajax con metodo post, perchè voglio impostare un nuovo valore in corrispondenza della chiave
    const obs = ajax({
      method: 'POST',
      url: base + '/set?key=' + this.key,
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
  }*/
}
