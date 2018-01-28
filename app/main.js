"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var platform_1 = require("nativescript-angular/platform");
var app_module_1 = require("./app.module");
platform_1.platformNativeScriptDynamic()
    .bootstrapModule(app_module_1.AppModule);
/* {
        
    apiKey: 'AIzaSyAOFJrOoZGs6mtx1oQoKHET-zzb-PabLUw',
    authDomain: 'time-tracking-pwa.firebaseapp.com',
    databaseURL: 'https://time-tracking-pwa.firebaseio.com/',
    projectId: 'time-tracking-pwa'
} */ 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwR0FBMEc7QUFDMUcsMERBQTRFO0FBQzVFLDJDQUF5QztBQUl6QyxzQ0FBMkIsRUFBRTtLQUN4QixlQUFlLENBQUMsc0JBQVMsQ0FBQyxDQUFDO0FBSWhDOzs7Ozs7SUFNSSIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRoaXMgaW1wb3J0IHNob3VsZCBiZSBmaXJzdCBpbiBvcmRlciB0byBsb2FkIHNvbWUgcmVxdWlyZWQgc2V0dGluZ3MgKGxpa2UgZ2xvYmFscyBhbmQgcmVmbGVjdC1tZXRhZGF0YSlcbmltcG9ydCB7IHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiO1xuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSBcIi4vYXBwLm1vZHVsZVwiO1xuXG5cblxucGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljKClcbiAgICAuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XG5cblxuXG4vKiB7XG4gICAgICAgIFxuICAgIGFwaUtleTogJ0FJemFTeUFPRkpyT29aR3M2bXR4MW9Rb0tIRVQtenpiLVBhYkxVdycsXG4gICAgYXV0aERvbWFpbjogJ3RpbWUtdHJhY2tpbmctcHdhLmZpcmViYXNlYXBwLmNvbScsXG4gICAgZGF0YWJhc2VVUkw6ICdodHRwczovL3RpbWUtdHJhY2tpbmctcHdhLmZpcmViYXNlaW8uY29tLycsXG4gICAgcHJvamVjdElkOiAndGltZS10cmFja2luZy1wd2EnXG59ICovIl19