/**
 * Created by Bar Saadon on 23/01/2017.
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule }  from './app.module';


// platformBrowserDynamic().bootstrapModule(AppModule);
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);