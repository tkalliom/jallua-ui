import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";

import { AgmCoreModule } from "angular2-google-maps/core";

import { AppComponent } from "./app.component";
import { StoreDetailComponent } from "./store-detail.component";

/* In general, putting a key in version management would not be wise,
   but since this goes to the user browser anyway, there is no need to
   protect it*/
@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDkJ79JXsG9zSXqBJCCUQ0zvB2DvQUbzx4"
    })
  ],
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    StoreDetailComponent
  ]
})
export class AppModule {}
