import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';

@Injectable({
  providedIn: 'any',
})
export class archivio_service {
  base: string =
    'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint';
  key: string = '479ca17b';

  constructor() {}

  public getData(): Observable<AjaxResponse<any>> {
    return ajax({
      method: 'GET',
      url: this.base + '/get?key=' + this.key,
      crossDomain: true,
    });
  }

  public setData(newArchivio: string): Observable<AjaxResponse<any>> {
    return ajax({
      method: 'POST',
      url: this.base + '/set?key=' + this.key,
      crossDomain: true,
      body: newArchivio,
    });
  }
}
