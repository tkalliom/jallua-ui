import { Component, OnInit } from "@angular/core";

import { Store } from "./store";
import { StoreService } from "./store.service";


@Component({
  selector: "my-app",
  providers: [StoreService],
  template: `
    <h1>{{title}}</h1>
    <h2>Stores</h2>
    <ul class="item-listing">
      <li *ngFor="let store of stores"
       (click)="onSelect(store)"
       [class.selected]="store === selectedStore">
        {{store.storeNumber}}: {{store.streetAddress}}, {{store.postOffice}}
      </li>
    </ul>
    <my-store-detail [store]="selectedStore"></my-store-detail>
    `,
  styles: [`
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
  stores: Store[];
  selectedStore: Store;

  constructor(private storeService: StoreService) { }

  getStores(): void {
    this.storeService.getStores().then(stores => this.stores = stores);
  }

  ngOnInit(): void {
    this.getStores();
  }

  onSelect(store: Store): void {
    this.selectedStore = store;
  }
}
