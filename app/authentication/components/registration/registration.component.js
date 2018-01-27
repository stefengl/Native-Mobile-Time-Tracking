"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var authentication_service_1 = require("../../shared/provider/authentication.service");
var RegistrationComponent = (function () {
    function RegistrationComponent(router, auth) {
        this.router = router;
        this.auth = auth;
        this.registrationModel = {
            mail: '',
            pw: '',
            pwConfirm: ''
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
            selector: 'Registration',
            moduleId: module.id,
            templateUrl: 'registration.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router,
            authentication_service_1.AuthenticationService])
    ], RegistrationComponent);
    return RegistrationComponent;
}());
exports.RegistrationComponent = RegistrationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0cmF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZ2lzdHJhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQXlDO0FBRXpDLHVGQUFxRjtBQVFyRjtJQVFJLCtCQUNZLE1BQWMsRUFDZCxJQUE0QjtRQUQ1QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsU0FBSSxHQUFKLElBQUksQ0FBd0I7UUFSeEMsc0JBQWlCLEdBQXNCO1lBQ25DLElBQUksRUFBRSxFQUFFO1lBQ1IsRUFBRSxFQUFFLEVBQUU7WUFDTixTQUFTLEVBQUUsRUFBRTtTQUNoQixDQUFBO0lBS0csQ0FBQztJQUVMLHdDQUFRLEdBQVIsY0FBYSxDQUFDO0lBRWQsMkNBQVcsR0FBWDtRQUNJLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUVoQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDL0MsQ0FBQztJQUlMLENBQUM7SUFFRCx5Q0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO0lBQ3BDLENBQUM7SUFFRCwyQ0FBVyxHQUFYO1FBRUksTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBakNRLHFCQUFxQjtRQU5qQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGNBQWM7WUFDeEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw2QkFBNkI7U0FDN0MsQ0FBQzt5Q0FXc0IsZUFBTTtZQUNQLDhDQUFxQjtPQVYvQixxQkFBcUIsQ0FrQ2pDO0lBQUQsNEJBQUM7Q0FBQSxBQWxDRCxJQWtDQztBQWxDWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBSZWdpc3RyYXRpb25Nb2RlbCB9IGZyb20gJy4uLy4uL3NoYXJlZC9tb2RlbHMvcmVnaXN0cmF0aW9uLm1vZGVsJztcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3Byb3ZpZGVyL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ1JlZ2lzdHJhdGlvbicsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdyZWdpc3RyYXRpb24uY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUmVnaXN0cmF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICByZWdpc3RyYXRpb25Nb2RlbDogUmVnaXN0cmF0aW9uTW9kZWwgPSB7XHJcbiAgICAgICAgbWFpbDogJycsXHJcbiAgICAgICAgcHc6ICcnLFxyXG4gICAgICAgIHB3Q29uZmlybTogJydcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIHByaXZhdGUgYXV0aCA6IEF1dGhlbnRpY2F0aW9uU2VydmljZSAgICBcclxuICAgICkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7IH1cclxuXHJcbiAgICBvblNpZ25VcFRhcCgpIHtcclxuICAgICAgICBsZXQgaXNWYWxpZCA9IHRoaXMuaXNGb3JtVmFsaWQoKVxyXG5cclxuICAgICAgICBpZiAoaXNWYWxpZCkge1xyXG4gICAgICAgICAgICB0aGlzLmF1dGgucmVnaXN0ZXIodGhpcy5yZWdpc3RyYXRpb25Nb2RlbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25CYWNrVGFwKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9sb2dpblwiXSlcclxuICAgIH1cclxuXHJcbiAgICBpc0Zvcm1WYWxpZCgpOiBib29sZWFuIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn0iXX0=