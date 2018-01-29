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
                _this.auth.onUserChanged(user);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDBDQUF5QztBQUV6Qyx1RkFBcUY7QUFRckY7SUFPSSx3QkFDWSxNQUFjLEVBQ2QsSUFBMkI7UUFEM0IsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFNBQUksR0FBSixJQUFJLENBQXVCO1FBUHZDLGVBQVUsR0FBZTtZQUNyQixJQUFJLEVBQUUsd0JBQXdCO1lBQzlCLEVBQUUsRUFBRSxVQUFVO1NBQ2pCLENBQUM7SUFJeUMsQ0FBQztJQUc1QyxvQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxvQ0FBVyxHQUFYO1FBQUEsaUJBUUM7UUFQRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO2FBQzNCLFNBQVMsQ0FBQyxVQUFDLElBQUk7WUFDWixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNQLEtBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM5QixLQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7WUFDakIsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFBO0lBQ1YsQ0FBQztJQUVELCtCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7SUFDbkMsQ0FBQztJQTVCUSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsT0FBTztZQUNqQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHNCQUFzQjtTQUN0QyxDQUFDO3lDQVVzQixlQUFNO1lBQ1IsOENBQXFCO09BVDlCLGNBQWMsQ0E2QjFCO0lBQUQscUJBQUM7Q0FBQSxBQTdCRCxJQTZCQztBQTdCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTG9naW5Nb2RlbCB9IGZyb20gXCIuLi8uLi9zaGFyZWQvbW9kZWxzL2xvZ2luLm1vZGVsXCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvcHJvdmlkZXIvYXV0aGVudGljYXRpb24uc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJMb2dpblwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcImxvZ2luLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XHJcblxyXG4gICAgbG9naW5Nb2RlbDogTG9naW5Nb2RlbCA9IHtcclxuICAgICAgICBtYWlsOiBcInN0ZWYuZW5nbC5zZUBnbWFpbC5jb21cIixcclxuICAgICAgICBwdzogXCJBZmZlMTIzNFwiXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBhdXRoOiBBdXRoZW50aWNhdGlvblNlcnZpY2UpIHsgfVxyXG5cclxuXHJcbiAgICBvblNpZ25VcFRhcCgpIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvc2lnbnVwXCJdKTtcclxuICAgIH1cclxuXHJcbiAgICBvblNpZ25JblRhcCgpIHtcclxuICAgICAgICB0aGlzLmF1dGgubG9naW4odGhpcy5sb2dpbk1vZGVsKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKCh1c2VyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aC5vblVzZXJDaGFuZ2VkKHVzZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9UYWJzKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB0b1RhYnMoKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3RhYnNcIl0pXHJcbiAgICB9XHJcbn1cclxuIl19