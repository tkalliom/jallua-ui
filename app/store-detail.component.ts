import { Component, Input } from "@angular/core";

import { Store } from "./store";

@Component({
  selector: "my-store-detail",
  template: `
    <div *ngIf="store">
      <h2>{{store.name}} details!</h2>
      <dl>
          <dt>id</dt><dd>{{store.storeNumber}}</dd>
          <dt>address</dt><dd>{{store.streetAddress}}</dd>
          <dt>post office</dt><dd>{{store.postOffice}}</dd>
      </dl>
    </div>
  `
})
export class StoreDetailComponent {
  @Input()
  store: Store;
}