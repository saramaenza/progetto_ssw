import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class archivio_service {
  URL: string =
    'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint/get?key9f3bb77e';

  constructor() {}

  /*
  inserisci(): Observable<string> {
  }

  cerca(): Observable<string> {
  }
  */
}
