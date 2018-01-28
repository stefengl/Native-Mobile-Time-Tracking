// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app.module";



platformNativeScriptDynamic()
    .bootstrapModule(AppModule);



/* {
        
    apiKey: 'AIzaSyAOFJrOoZGs6mtx1oQoKHET-zzb-PabLUw',
    authDomain: 'time-tracking-pwa.firebaseapp.com',
    databaseURL: 'https://time-tracking-pwa.firebaseio.com/',
    projectId: 'time-tracking-pwa'
} */