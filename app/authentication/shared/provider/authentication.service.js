"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
require("rxjs/add/operator/map");
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.endpoint = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAOFJrOoZGs6mtx1oQoKHET-zzb-PabLUw";
        this.user = null;
    }
    AuthenticationService.prototype.register = function (newUser) {
        console.log("TODO: Register");
    };
    AuthenticationService.prototype.login = function (user) {
        return this.http.post(this.endpoint, {
            email: user.mail,
            password: user.pw,
            returnSecureToken: true
        }).map(this.handleLogin);
    };
    AuthenticationService.prototype.logout = function (user) {
        console.log("TODO: Logout");
    };
    AuthenticationService.prototype.isLoggedIn = function (user) {
        console.log("TODO: IsLoggedIn");
    };
    AuthenticationService.prototype.handleLogin = function (response) {
        this.user = Object.assign({}, response);
        return this.user;
    };
    AuthenticationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF1dGhlbnRpY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFHM0MsNkNBQWtEO0FBQ2xELGlDQUE4QjtBQUs5QjtJQUlJLCtCQUNZLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFKcEIsYUFBUSxHQUFXLHVIQUF1SCxDQUFBO1FBQzFJLFNBQUksR0FBUSxJQUFJLENBQUM7SUFHTyxDQUFDO0lBRWpDLHdDQUFRLEdBQVIsVUFBUyxPQUEwQjtRQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELHFDQUFLLEdBQUwsVUFBTSxJQUFnQjtRQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDaEIsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ2pCLGlCQUFpQixFQUFFLElBQUk7U0FDMUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDNUIsQ0FBQztJQUVELHNDQUFNLEdBQU4sVUFBTyxJQUFnQjtRQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCwwQ0FBVSxHQUFWLFVBQVcsSUFBZ0I7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFHRCwyQ0FBVyxHQUFYLFVBQVksUUFBa0I7UUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQTtRQUN2QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBL0JRLHFCQUFxQjtRQURqQyxpQkFBVSxFQUFFO3lDQU1TLGlCQUFVO09BTG5CLHFCQUFxQixDQWlDakM7SUFBRCw0QkFBQztDQUFBLEFBakNELElBaUNDO0FBakNZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBMb2dpbk1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9sb2dpbi5tb2RlbFwiO1xyXG5pbXBvcnQgeyBSZWdpc3RyYXRpb25Nb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvcmVnaXN0cmF0aW9uLm1vZGVsXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCJcclxuXHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25TZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgZW5kcG9pbnQ6IHN0cmluZyA9IFwiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vaWRlbnRpdHl0b29sa2l0L3YzL3JlbHlpbmdwYXJ0eS92ZXJpZnlQYXNzd29yZD9rZXk9QUl6YVN5QU9GSnJPb1pHczZtdHgxb1FvS0hFVC16emItUGFiTFV3XCJcclxuICAgIHByaXZhdGUgdXNlcjogYW55ID0gbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxyXG5cclxuICAgIHJlZ2lzdGVyKG5ld1VzZXI6IFJlZ2lzdHJhdGlvbk1vZGVsKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUT0RPOiBSZWdpc3RlclwiKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dpbih1c2VyOiBMb2dpbk1vZGVsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuZW5kcG9pbnQsIHtcclxuICAgICAgICAgICAgZW1haWw6IHVzZXIubWFpbCxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IHVzZXIucHcsXHJcbiAgICAgICAgICAgIHJldHVyblNlY3VyZVRva2VuOiB0cnVlXHJcbiAgICAgICAgfSkubWFwKHRoaXMuaGFuZGxlTG9naW4pXHJcbiAgICB9XHJcblxyXG4gICAgbG9nb3V0KHVzZXI6IExvZ2luTW9kZWwpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRPRE86IExvZ291dFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0xvZ2dlZEluKHVzZXI6IExvZ2luTW9kZWwpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRPRE86IElzTG9nZ2VkSW5cIik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGhhbmRsZUxvZ2luKHJlc3BvbnNlOiBSZXNwb25zZSkge1xyXG4gICAgICAgIHRoaXMudXNlciA9IE9iamVjdC5hc3NpZ24oe30sIHJlc3BvbnNlKVxyXG4gICAgICAgIHJldHVybiB0aGlzLnVzZXI7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==