import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import { Location } from "./location";
import { Store } from "./store";

import "rxjs/add/operator/toPromise";

@Injectable()
export class StoreService {
  private storesUrl = "/stores";

  constructor(private http: Http) { }

  getStores(): Promise<Store[]> {
    return this.http.get(this.storesUrl)
      .toPromise()
      .then(response => response.json() as Store[])
      .catch(this.handleError);
  }

  getStoreIdsByLocation(location: Location): Promise<string[]> {
    return this.http.get(this.closestStoreIdsUrl(location))
      .toPromise()
      .then(response => response.json() as string[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error("An error occurred", error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  private closestStoreIdsUrl(location: Location) {
    return `/stores/closest?lat=${location.lat}&lng=${location.lng}`;
  }
}
