"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// MODULES
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var common_1 = require("nativescript-angular/common");
var authentication_routing_module_1 = require("./authentication.routing.module");
// Declarations
var login_component_1 = require("./components/login/login.component");
var registration_component_1 = require("./components/registration/registration.component");
// Provider
var authentication_service_1 = require("./shared/provider/authentication.service");
var AuthenticationModule = (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                authentication_routing_module_1.AuthenticationRoutingModule,
                forms_1.NativeScriptFormsModule
            ],
            exports: [
                login_component_1.LoginComponent,
                registration_component_1.RegistrationComponent
            ],
            declarations: [
                login_component_1.LoginComponent,
                registration_component_1.RegistrationComponent
            ],
            providers: [authentication_service_1.AuthenticationService],
        })
    ], AuthenticationModule);
    return AuthenticationModule;
}());
exports.AuthenticationModule = AuthenticationModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aGVudGljYXRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsVUFBVTtBQUNWLHNDQUF5QztBQUN6QyxvREFBcUU7QUFDckUsc0RBQXVFO0FBQ3ZFLGlGQUE4RTtBQUU5RSxlQUFlO0FBQ2Ysc0VBQW9FO0FBQ3BFLDJGQUF5RjtBQUV6RixXQUFXO0FBQ1gsbUZBQWlGO0FBbUJqRjtJQUFBO0lBQW9DLENBQUM7SUFBeEIsb0JBQW9CO1FBaEJoQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsaUNBQXdCO2dCQUN4QiwyREFBMkI7Z0JBQzNCLCtCQUF1QjthQUMxQjtZQUNELE9BQU8sRUFBRTtnQkFDTCxnQ0FBYztnQkFDZCw4Q0FBcUI7YUFDeEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsZ0NBQWM7Z0JBQ2QsOENBQXFCO2FBQ3hCO1lBQ0QsU0FBUyxFQUFFLENBQUMsOENBQXFCLENBQUM7U0FDckMsQ0FBQztPQUNXLG9CQUFvQixDQUFJO0lBQUQsMkJBQUM7Q0FBQSxBQUFyQyxJQUFxQztBQUF4QixvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNT0RVTEVTXHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2F1dGhlbnRpY2F0aW9uLnJvdXRpbmcubW9kdWxlJztcclxuXHJcbi8vIERlY2xhcmF0aW9uc1xyXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSZWdpc3RyYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQnO1xyXG5cclxuLy8gUHJvdmlkZXJcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvcHJvdmlkZXIvYXV0aGVudGljYXRpb24uc2VydmljZSc7XHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgQXV0aGVudGljYXRpb25Sb3V0aW5nTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIExvZ2luQ29tcG9uZW50LFxyXG4gICAgICAgIFJlZ2lzdHJhdGlvbkNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIExvZ2luQ29tcG9uZW50LFxyXG4gICAgICAgIFJlZ2lzdHJhdGlvbkNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW0F1dGhlbnRpY2F0aW9uU2VydmljZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvbk1vZHVsZSB7IH1cclxuIl19