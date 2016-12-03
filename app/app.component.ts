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
    <sebm-google-map [latitude]="location.lat" [longitude]="location.lng" (centerChange)="mapCenters.next({lat: $event.lat, lng: $event.lng})">
      <sebm-google-map-marker *ngFor="let store of nearbyStores"
       [latitude]="store.lat"
       [longitude]="store.lng"
       [title]="store.displayName">
        <sebm-google-map-info-window>
          <my-store-detail [store]="store"></my-store-detail>
        </sebm-google-map-info-window>
      </sebm-google-map-marker> 
    </sebm-google-map>
    `,
  styles: [`
    .sebm-google-map-container {
      height: 100%;
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
}
