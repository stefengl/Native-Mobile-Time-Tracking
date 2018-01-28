"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var authentication_service_1 = require("../../shared/provider/authentication.service");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, auth) {
        this.router = router;
        this.auth = auth;
        this.loginModel = {
            mail: "stef.engl.se@gmail.com",
            pw: "Affe1234"
        };
    }
    LoginComponent.prototype.onSignUpTap = function () {
        this.router.navigate(["/signup"]);
    };
    LoginComponent.prototype.onSignInTap = function () {
        var _this = this;
        this.auth.login(this.loginModel)
            .subscribe(function (user) {
            if (user) {
                _this.toTabs();
            }
        });
    };
    LoginComponent.prototype.toTabs = function () {
        this.router.navigate(["/tabs"]);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "Login",
            moduleId: module.id,
            templateUrl: "login.component.html"
        }),
        __metadata("design:paramtypes", [router_1.Router,
            authentication_service_1.AuthenticationService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDBDQUF5QztBQUV6Qyx1RkFBcUY7QUFRckY7SUFPSSx3QkFDWSxNQUFjLEVBQ2QsSUFBMkI7UUFEM0IsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFNBQUksR0FBSixJQUFJLENBQXVCO1FBUHZDLGVBQVUsR0FBZTtZQUNyQixJQUFJLEVBQUUsd0JBQXdCO1lBQzlCLEVBQUUsRUFBRSxVQUFVO1NBQ2pCLENBQUM7SUFJeUMsQ0FBQztJQUc1QyxvQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxvQ0FBVyxHQUFYO1FBQUEsaUJBT0M7UUFORyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO2FBQzNCLFNBQVMsQ0FBQyxVQUFDLElBQUk7WUFDWixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNQLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQTtZQUNqQixDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDVixDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtJQUNuQyxDQUFDO0lBM0JRLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsc0JBQXNCO1NBQ3RDLENBQUM7eUNBVXNCLGVBQU07WUFDUiw4Q0FBcUI7T0FUOUIsY0FBYyxDQTRCMUI7SUFBRCxxQkFBQztDQUFBLEFBNUJELElBNEJDO0FBNUJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBMb2dpbk1vZGVsIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9tb2RlbHMvbG9naW4ubW9kZWxcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wcm92aWRlci9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkxvZ2luXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwibG9naW4uY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IHtcclxuXHJcbiAgICBsb2dpbk1vZGVsOiBMb2dpbk1vZGVsID0ge1xyXG4gICAgICAgIG1haWw6IFwic3RlZi5lbmdsLnNlQGdtYWlsLmNvbVwiLFxyXG4gICAgICAgIHB3OiBcIkFmZmUxMjM0XCJcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcml2YXRlIGF1dGg6IEF1dGhlbnRpY2F0aW9uU2VydmljZSkgeyB9XHJcblxyXG5cclxuICAgIG9uU2lnblVwVGFwKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9zaWdudXBcIl0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2lnbkluVGFwKCkge1xyXG4gICAgICAgIHRoaXMuYXV0aC5sb2dpbih0aGlzLmxvZ2luTW9kZWwpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHVzZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b1RhYnMoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHRvVGFicygpe1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi90YWJzXCJdKVxyXG4gICAgfVxyXG59XHJcbiJdfQ==