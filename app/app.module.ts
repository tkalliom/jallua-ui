import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { StoreDetailComponent } from "./store-detail.component";

@NgModule({
  imports: [ BrowserModule, HttpModule ],
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    StoreDetailComponent
  ]
})
export class AppModule {}
