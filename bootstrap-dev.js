import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './scripts/app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
