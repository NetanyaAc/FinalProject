/**
 * Created by Bar Saadon on 23/01/2017.
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { AppModule }  from './app.module';
import { LeftModule }  from './left.module';
import { RightModule } from "./right.module";

// platformBrowserDynamic().bootstrapModule(AppModule);
platformBrowserDynamic().bootstrapModule(LeftModule);
platformBrowserDynamic().bootstrapModule(RightModule);