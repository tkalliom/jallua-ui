import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import { Store } from "./store";

import "rxjs/add/operator/toPromise";

@Injectable()
export class StoreService {
  private storesUrl = "stores.json";

  constructor(private http: Http) { }

  getStores(): Promise<Store[]> {
    return this.http.get(this.storesUrl)
      .toPromise()
      .then(response => response.json() as Store[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error("An error occurred", error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
