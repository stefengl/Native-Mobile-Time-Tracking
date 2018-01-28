"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// MODULES
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var forms_1 = require("nativescript-angular/forms");
var http_client_1 = require("nativescript-angular/http-client");
var authentication_routing_module_1 = require("./authentication.routing.module");
var tabs_module_1 = require("../tabs/tabs.module");
// Declarations
var login_component_1 = require("./components/login/login.component");
var registration_component_1 = require("./components/registration/registration.component");
// Provider
var authentication_service_1 = require("./shared/provider/authentication.service");
var AuthenticationModule = /** @class */ (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                forms_1.NativeScriptFormsModule,
                http_client_1.NativeScriptHttpClientModule,
                authentication_routing_module_1.AuthenticationRoutingModule,
                tabs_module_1.TabsModule
            ],
            exports: [
                login_component_1.LoginComponent,
                registration_component_1.RegistrationComponent
            ],
            declarations: [
                login_component_1.LoginComponent,
                registration_component_1.RegistrationComponent
            ],
            providers: [authentication_service_1.AuthenticationService]
        })
    ], AuthenticationModule);
    return AuthenticationModule;
}());
exports.AuthenticationModule = AuthenticationModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aGVudGljYXRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsVUFBVTtBQUNWLHNDQUF5QztBQUN6QyxzREFBdUU7QUFDdkUsb0RBQXFFO0FBQ3JFLGdFQUFnRjtBQUNoRixpRkFBOEU7QUFDOUUsbURBQWlEO0FBRWpELGVBQWU7QUFDZixzRUFBb0U7QUFDcEUsMkZBQXlGO0FBRXpGLFdBQVc7QUFDWCxtRkFBaUY7QUFvQmpGO0lBQUE7SUFBb0MsQ0FBQztJQUF4QixvQkFBb0I7UUFsQmhDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLCtCQUF1QjtnQkFDdkIsMENBQTRCO2dCQUM1QiwyREFBMkI7Z0JBQzNCLHdCQUFVO2FBQ2I7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsZ0NBQWM7Z0JBQ2QsOENBQXFCO2FBQ3hCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLGdDQUFjO2dCQUNkLDhDQUFxQjthQUN4QjtZQUNELFNBQVMsRUFBRSxDQUFDLDhDQUFxQixDQUFDO1NBQ3JDLENBQUM7T0FDVyxvQkFBb0IsQ0FBSTtJQUFELDJCQUFDO0NBQUEsQUFBckMsSUFBcUM7QUFBeEIsb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTU9EVUxFU1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwLWNsaWVudFwiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hdXRoZW50aWNhdGlvbi5yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBUYWJzTW9kdWxlIH0gZnJvbSBcIi4uL3RhYnMvdGFicy5tb2R1bGVcIjtcclxuXHJcbi8vIERlY2xhcmF0aW9uc1xyXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFJlZ2lzdHJhdGlvbkNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnRcIjtcclxuXHJcbi8vIFByb3ZpZGVyXHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gXCIuL3NoYXJlZC9wcm92aWRlci9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgICAgIEF1dGhlbnRpY2F0aW9uUm91dGluZ01vZHVsZSxcclxuICAgICAgICBUYWJzTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIExvZ2luQ29tcG9uZW50LFxyXG4gICAgICAgIFJlZ2lzdHJhdGlvbkNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIExvZ2luQ29tcG9uZW50LFxyXG4gICAgICAgIFJlZ2lzdHJhdGlvbkNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW0F1dGhlbnRpY2F0aW9uU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uTW9kdWxlIHsgfVxyXG4iXX0=