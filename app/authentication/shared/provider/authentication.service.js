"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AuthenticationService = (function () {
    function AuthenticationService() {
    }
    AuthenticationService.prototype.register = function (newUser) {
        console.log("TODO: Register");
    };
    AuthenticationService.prototype.login = function (user) {
        console.log("TODO: Login");
    };
    AuthenticationService.prototype.logout = function (user) {
        console.log("TODO: Logout");
    };
    AuthenticationService.prototype.isLoggedIn = function (user) {
        console.log("TODO: IsLoggedIn");
    };
    AuthenticationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF1dGhlbnRpY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFLM0M7SUFFSTtJQUFnQixDQUFDO0lBRVYsd0NBQVEsR0FBZixVQUFnQixPQUEwQjtRQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUE7SUFDakMsQ0FBQztJQUVNLHFDQUFLLEdBQVosVUFBYSxJQUFnQjtRQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFBO0lBQzlCLENBQUM7SUFFTSxzQ0FBTSxHQUFiLFVBQWMsSUFBZ0I7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQTtJQUMvQixDQUFDO0lBRU0sMENBQVUsR0FBakIsVUFBa0IsSUFBZ0I7UUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO0lBQ25DLENBQUM7SUFsQlEscUJBQXFCO1FBRGpDLGlCQUFVLEVBQUU7O09BQ0EscUJBQXFCLENBb0JqQztJQUFELDRCQUFDO0NBQUEsQUFwQkQsSUFvQkM7QUFwQlksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSZWdpc3RyYXRpb25Nb2RlbCB9IGZyb20gJy4uL21vZGVscy9yZWdpc3RyYXRpb24ubW9kZWwnO1xyXG5pbXBvcnQgeyBMb2dpbk1vZGVsIH0gZnJvbSAnLi4vbW9kZWxzL2xvZ2luLm1vZGVsJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uU2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgcmVnaXN0ZXIobmV3VXNlcjogUmVnaXN0cmF0aW9uTW9kZWwpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRPRE86IFJlZ2lzdGVyXCIpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvZ2luKHVzZXI6IExvZ2luTW9kZWwpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRPRE86IExvZ2luXCIpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvZ291dCh1c2VyOiBMb2dpbk1vZGVsKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUT0RPOiBMb2dvdXRcIilcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNMb2dnZWRJbih1c2VyOiBMb2dpbk1vZGVsKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUT0RPOiBJc0xvZ2dlZEluXCIpXHJcbiAgICB9XHJcblxyXG59Il19