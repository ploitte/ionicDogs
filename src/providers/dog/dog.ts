import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DogProvider {

  public apiUrl: string = 'https://dog.ceo/api/';

  constructor(public http: HttpClient) {}

  /**
   * Permet de récupérer le contenu d'une api (GET)
   * @param {string} endPoint
   * @returns {Observable<Object>}
   */
  get(endPoint: string) {
    return this.http.get(this.apiUrl + endPoint);
  }
}
