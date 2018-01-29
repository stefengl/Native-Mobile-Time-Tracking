"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
require("rxjs/add/operator/map");
var Subject_1 = require("rxjs/Subject");
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.endpoint = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAOFJrOoZGs6mtx1oQoKHET-zzb-PabLUw";
        this.user = {};
        this.userSubject = new Subject_1.Subject();
        this.userObservable = this.userSubject.asObservable();
    }
    AuthenticationService.prototype.register = function (newUser) {
        console.log("TODO: Register");
    };
    AuthenticationService.prototype.login = function (user) {
        return this.http.post(this.endpoint, {
            email: user.mail,
            password: user.pw,
            returnSecureToken: true
        });
    };
    AuthenticationService.prototype.logout = function (user) {
        console.log("TODO: Logout");
    };
    AuthenticationService.prototype.isLoggedIn = function (user) {
        console.log("TODO: IsLoggedIn");
    };
    AuthenticationService.prototype.onUserChanged = function (user) {
        this.userSubject.next(user);
    };
    AuthenticationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF1dGhlbnRpY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFHM0MsNkNBQWtEO0FBQ2xELGlDQUE4QjtBQUM5Qix3Q0FBdUM7QUFNdkM7SUFNSSwrQkFDWSxJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBTnBCLGFBQVEsR0FBVyx1SEFBdUgsQ0FBQTtRQUNsSixTQUFJLEdBQVEsRUFBRSxDQUFDO1FBQ2YsZ0JBQVcsR0FBaUIsSUFBSSxpQkFBTyxFQUFFLENBQUM7UUFDMUMsbUJBQWMsR0FBb0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUdsQyxDQUFDO0lBRWpDLHdDQUFRLEdBQVIsVUFBUyxPQUEwQjtRQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELHFDQUFLLEdBQUwsVUFBTSxJQUFnQjtRQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDaEIsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ2pCLGlCQUFpQixFQUFFLElBQUk7U0FDMUIsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELHNDQUFNLEdBQU4sVUFBTyxJQUFnQjtRQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCwwQ0FBVSxHQUFWLFVBQVcsSUFBZ0I7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCw2Q0FBYSxHQUFiLFVBQWMsSUFBSTtRQUNkLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUEvQlEscUJBQXFCO1FBRGpDLGlCQUFVLEVBQUU7eUNBUVMsaUJBQVU7T0FQbkIscUJBQXFCLENBZ0NqQztJQUFELDRCQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7QUFoQ1ksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IExvZ2luTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2xvZ2luLm1vZGVsXCI7XHJcbmltcG9ydCB7IFJlZ2lzdHJhdGlvbk1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9yZWdpc3RyYXRpb24ubW9kZWxcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIlxyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSBcInJ4anMvU3ViamVjdFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvblNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBlbmRwb2ludDogc3RyaW5nID0gXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9pZGVudGl0eXRvb2xraXQvdjMvcmVseWluZ3BhcnR5L3ZlcmlmeVBhc3N3b3JkP2tleT1BSXphU3lBT0ZKck9vWkdzNm10eDFvUW9LSEVULXp6Yi1QYWJMVXdcIlxyXG4gICAgdXNlcjogYW55ID0ge307XHJcbiAgICB1c2VyU3ViamVjdDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcclxuICAgIHVzZXJPYnNlcnZhYmxlOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLnVzZXJTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XHJcblxyXG4gICAgcmVnaXN0ZXIobmV3VXNlcjogUmVnaXN0cmF0aW9uTW9kZWwpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRPRE86IFJlZ2lzdGVyXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ2luKHVzZXI6IExvZ2luTW9kZWwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5lbmRwb2ludCwge1xyXG4gICAgICAgICAgICBlbWFpbDogdXNlci5tYWlsLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogdXNlci5wdyxcclxuICAgICAgICAgICAgcmV0dXJuU2VjdXJlVG9rZW46IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGxvZ291dCh1c2VyOiBMb2dpbk1vZGVsKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUT0RPOiBMb2dvdXRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgaXNMb2dnZWRJbih1c2VyOiBMb2dpbk1vZGVsKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUT0RPOiBJc0xvZ2dlZEluXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVXNlckNoYW5nZWQodXNlcikge1xyXG4gICAgICAgIHRoaXMudXNlclN1YmplY3QubmV4dCh1c2VyKVxyXG4gICAgfVxyXG59XHJcbiJdfQ==