"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var authentication_service_1 = require("../../shared/provider/authentication.service");
var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(router, auth) {
        this.router = router;
        this.auth = auth;
        this.registrationModel = {
            mail: "",
            pw: "",
            pwConfirm: ""
        };
    }
    RegistrationComponent.prototype.ngOnInit = function () { };
    RegistrationComponent.prototype.onSignUpTap = function () {
        var isValid = this.isFormValid();
        if (isValid) {
            this.auth.register(this.registrationModel);
        }
    };
    RegistrationComponent.prototype.onBackTap = function () {
        this.router.navigate(["/login"]);
    };
    RegistrationComponent.prototype.isFormValid = function () {
        return true;
    };
    RegistrationComponent = __decorate([
        core_1.Component({
            selector: "Registration",
            moduleId: module.id,
            templateUrl: "registration.component.html"
        }),
        __metadata("design:paramtypes", [router_1.Router,
            authentication_service_1.AuthenticationService])
    ], RegistrationComponent);
    return RegistrationComponent;
}());
exports.RegistrationComponent = RegistrationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0cmF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZ2lzdHJhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQXlDO0FBRXpDLHVGQUFxRjtBQVFyRjtJQVFJLCtCQUNZLE1BQWMsRUFDZCxJQUEyQjtRQUQzQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsU0FBSSxHQUFKLElBQUksQ0FBdUI7UUFSdkMsc0JBQWlCLEdBQXNCO1lBQ25DLElBQUksRUFBRSxFQUFFO1lBQ1IsRUFBRSxFQUFFLEVBQUU7WUFDTixTQUFTLEVBQUUsRUFBRTtTQUNoQixDQUFDO0lBS0UsQ0FBQztJQUVMLHdDQUFRLEdBQVIsY0FBYSxDQUFDO0lBRWQsMkNBQVcsR0FBWDtRQUNJLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVuQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDL0MsQ0FBQztJQUVMLENBQUM7SUFFRCx5Q0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCwyQ0FBVyxHQUFYO1FBRUksTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBL0JRLHFCQUFxQjtRQU5qQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGNBQWM7WUFDeEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw2QkFBNkI7U0FDN0MsQ0FBQzt5Q0FXc0IsZUFBTTtZQUNSLDhDQUFxQjtPQVY5QixxQkFBcUIsQ0FnQ2pDO0lBQUQsNEJBQUM7Q0FBQSxBQWhDRCxJQWdDQztBQWhDWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUmVnaXN0cmF0aW9uTW9kZWwgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL21vZGVscy9yZWdpc3RyYXRpb24ubW9kZWxcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wcm92aWRlci9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIlJlZ2lzdHJhdGlvblwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcInJlZ2lzdHJhdGlvbi5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUmVnaXN0cmF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICByZWdpc3RyYXRpb25Nb2RlbDogUmVnaXN0cmF0aW9uTW9kZWwgPSB7XHJcbiAgICAgICAgbWFpbDogXCJcIixcclxuICAgICAgICBwdzogXCJcIixcclxuICAgICAgICBwd0NvbmZpcm06IFwiXCJcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcml2YXRlIGF1dGg6IEF1dGhlbnRpY2F0aW9uU2VydmljZVxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHsgfVxyXG5cclxuICAgIG9uU2lnblVwVGFwKCkge1xyXG4gICAgICAgIGNvbnN0IGlzVmFsaWQgPSB0aGlzLmlzRm9ybVZhbGlkKCk7XHJcblxyXG4gICAgICAgIGlmIChpc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aC5yZWdpc3Rlcih0aGlzLnJlZ2lzdHJhdGlvbk1vZGVsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uQmFja1RhcCgpIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbG9naW5cIl0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlzRm9ybVZhbGlkKCk6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufVxyXG4iXX0=