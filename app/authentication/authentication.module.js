"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// MODULES
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var forms_1 = require("nativescript-angular/forms");
var http_client_1 = require("nativescript-angular/http-client");
var authentication_routing_module_1 = require("./authentication.routing.module");
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
            ],
            exports: [],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aGVudGljYXRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsVUFBVTtBQUNWLHNDQUF5QztBQUN6QyxzREFBdUU7QUFDdkUsb0RBQXFFO0FBQ3JFLGdFQUFnRjtBQUNoRixpRkFBOEU7QUFFOUUsZUFBZTtBQUNmLHNFQUFvRTtBQUNwRSwyRkFBeUY7QUFFekYsV0FBVztBQUNYLG1GQUFpRjtBQW1CakY7SUFBQTtJQUFvQyxDQUFDO0lBQXhCLG9CQUFvQjtRQWpCaEMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsK0JBQXVCO2dCQUN2QiwwQ0FBNEI7Z0JBQzVCLDJEQUEyQjthQUM5QjtZQUNELE9BQU8sRUFBRSxFQUdSO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLGdDQUFjO2dCQUNkLDhDQUFxQjthQUN4QjtZQUNELFNBQVMsRUFBRSxDQUFDLDhDQUFxQixDQUFDO1NBQ3JDLENBQUM7T0FDVyxvQkFBb0IsQ0FBSTtJQUFELDJCQUFDO0NBQUEsQUFBckMsSUFBcUM7QUFBeEIsb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTU9EVUxFU1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwLWNsaWVudFwiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hdXRoZW50aWNhdGlvbi5yb3V0aW5nLm1vZHVsZVwiO1xyXG5cclxuLy8gRGVjbGFyYXRpb25zXHJcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUmVnaXN0cmF0aW9uQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudFwiO1xyXG5cclxuLy8gUHJvdmlkZXJcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vc2hhcmVkL3Byb3ZpZGVyL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2VcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICAgICAgQXV0aGVudGljYXRpb25Sb3V0aW5nTW9kdWxlLFxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtcclxuLyogICAgICAgICBMb2dpbkNvbXBvbmVudCxcclxuICAgICAgICBSZWdpc3RyYXRpb25Db21wb25lbnQgKi9cclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBMb2dpbkNvbXBvbmVudCxcclxuICAgICAgICBSZWdpc3RyYXRpb25Db21wb25lbnRcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtBdXRoZW50aWNhdGlvblNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvbk1vZHVsZSB7IH1cclxuIl19