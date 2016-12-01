import { Component, OnInit } from "@angular/core";
import { Subject }  from "rxjs/Subject";
import "rxjs/add/operator/debounceTime";

import { Location } from "./location";
import { Store } from "./store";
import { StoreService } from "./store.service";


@Component({
  selector: "my-app",
  providers: [StoreService],
  template: `
    <h1>{{title}}</h1>
    <h2>Location selection</h2>
    <sebm-google-map [latitude]="location.lat" [longitude]="location.lng" (centerChange)="mapCenters.next({lat: $event.lat, lng: $event.lng})"></sebm-google-map>
    <h2>Stores</h2>
    <ul class="item-listing">
      <li *ngFor="let store of nearbyStores"
       (click)="onSelect(store)"
       [class.selected]="store === selectedStore">
        {{store.storeNumber}}: {{store.streetAddress}}, {{store.postOffice}}
      </li>
    </ul>
    <my-store-detail [store]="selectedStore"></my-store-detail>
    `,
  styles: [`
    .sebm-google-map-container {
      height: 300px;
    }
    ul {
      list-style-type: none;
      padding: 0;
      width: 30em;
      display: inline-block;
    }
    li {
      cursor: pointer;
      background-color: #DDD;
      margin: .5em;
      padding: .3em;
      height: 1.5em;
      border-radius: 4px;
    }
    li:hover {
      color: #607D8B;
      background-color: #DDD;
      position: relative;
      left: .1em;
    }
    li.selected {
      background-color: #BAC2C6;
      color: white;
    }
    li.selected:hover {
      background-color: #BBD8DC;
      color: white;
    }
    my-store-detail {
      display: inline-block;
    }
  `]
})
export class AppComponent implements OnInit {
  title = "Jallua UI";

  location = new Location(61.4491, 23.8603);

  mapCenters = new Subject<Location>();

  allStores: Store[];
  nearbyStoreIds: string[];
  nearbyStores: Store[];
  selectedStore: Store;

  constructor(private storeService: StoreService) {
    this.mapCenters.debounceTime(500).subscribe(location => this.refreshPosition(location));
  }

  refreshPosition(location: Location) {
    this.storeService.getStoreIdsByLocation(location)
      .then(storeIds => {
        const shortlist = storeIds.slice(0, 5);
        this.nearbyStores = this.allStores.filter(store => shortlist.indexOf(store.storeNumber) !== -1);
    });
  }

  ngOnInit(): void {
    this.storeService.getStores().then(stores => this.allStores = stores);
    this.refreshPosition(this.location);
  }

  onSelect(store: Store): void {
    this.selectedStore = store;
  }
}
