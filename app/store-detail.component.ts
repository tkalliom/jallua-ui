import { Component, Input } from "@angular/core";

import { Store } from "./store";

@Component({
  selector: "my-store-detail",
  template: `
    <div *ngIf="store">
      <h2>Store details</h2>
      <dl>
          <dt>id</dt><dd>{{store.storeNumber}}</dd>
          <dt>address</dt><dd>{{store.streetAddress}}</dd>
          <dt>post office</dt><dd>{{store.postOffice}}</dd>
          <dt *ngIf="store.condition.text">condition</dt><dd>{{store.condition.text}}</dd>
          <dt *ngIf="store.condition.temp">temp</dt><dd>{{store.condition.temp}}</dd>
          <dt *ngIf="store.condition.date">conditions at</dt><dd>{{store.condition.date}}</dd>
      </dl>
    </div>
  `
})
export class StoreDetailComponent {
  @Input()
  store: Store;
}