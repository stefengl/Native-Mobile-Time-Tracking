"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(router) {
        this.router = router;
        this.loginModel = {
            mail: '',
            pw: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.onSignUpTap = function () {
        this.router.navigate(['/signup']);
    };
    LoginComponent.prototype.onSignInTap = function () {
        console.log("Mail: " + this.loginModel.mail + "Pw: " + this.loginModel.pw);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'Login',
            moduleId: module.id,
            templateUrl: 'login.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELDBDQUF5QztBQVF6QztJQU9JLHdCQUFvQixNQUFlO1FBQWYsV0FBTSxHQUFOLE1BQU0sQ0FBUztRQUxuQyxlQUFVLEdBQWU7WUFDckIsSUFBSSxFQUFFLEVBQUU7WUFDUixFQUFFLEVBQUUsRUFBRTtTQUNULENBQUE7SUFFc0MsQ0FBQztJQUV4QyxpQ0FBUSxHQUFSLGNBQWEsQ0FBQztJQUVkLG9DQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUE7SUFDckMsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUM5RSxDQUFDO0lBakJRLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsc0JBQXNCO1NBQ3RDLENBQUM7eUNBUytCLGVBQU07T0FQMUIsY0FBYyxDQWtCMUI7SUFBRCxxQkFBQztDQUFBLEFBbEJELElBa0JDO0FBbEJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTG9naW5Nb2RlbCB9IGZyb20gJy4uLy4uL3NoYXJlZC9tb2RlbHMvbG9naW4ubW9kZWwnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ0xvZ2luJyxcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2xvZ2luLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBsb2dpbk1vZGVsOiBMb2dpbk1vZGVsID0ge1xyXG4gICAgICAgIG1haWw6ICcnLFxyXG4gICAgICAgIHB3OiAnJ1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyIDogUm91dGVyKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHsgfVxyXG5cclxuICAgIG9uU2lnblVwVGFwKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3NpZ251cCddKVxyXG4gICAgfVxyXG5cclxuICAgIG9uU2lnbkluVGFwKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTWFpbDogXCIgKyB0aGlzLmxvZ2luTW9kZWwubWFpbCArIFwiUHc6IFwiICsgdGhpcy5sb2dpbk1vZGVsLnB3KVxyXG4gICAgfVxyXG59Il19