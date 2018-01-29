"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var authentication_service_1 = require("../../authentication/shared/provider/authentication.service");
var DataService = /** @class */ (function () {
    function DataService(auth, httpClient) {
        var _this = this;
        this.auth = auth;
        this.httpClient = httpClient;
        this.user = {};
        this.firebaseDbEndpoint = "https://time-tracking-pwa.firebaseio.com";
        this.auth.userObservable.subscribe(function (user) {
            console.log(JSON.stringify(user));
            _this.user = user;
        });
    }
    DataService.prototype.getCategories = function () {
        return this.httpClient.get(this.firebaseDbEndpoint + "/categories.json?auth=" + this.user.idToken);
    };
    DataService.prototype.getTags = function () {
        return this.httpClient.get(this.firebaseDbEndpoint + "/tags.json?auth=" + this.user.idToken);
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [authentication_service_1.AuthenticationService,
            http_1.HttpClient])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUFrRDtBQUVsRCxzR0FBb0c7QUFHcEc7SUFNSSxxQkFDWSxJQUEyQixFQUMzQixVQUFzQjtRQUZsQyxpQkFRQztRQVBXLFNBQUksR0FBSixJQUFJLENBQXVCO1FBQzNCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFObEMsU0FBSSxHQUFRLEVBQUUsQ0FBQTtRQUVkLHVCQUFrQixHQUFXLDBDQUEwQyxDQUFBO1FBTW5FLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQUk7WUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7WUFDakMsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsbUNBQWEsR0FBYjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUN0RyxDQUFDO0lBRUQsNkJBQU8sR0FBUDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsa0JBQWtCLEdBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUMvRixDQUFDO0lBdEJRLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FRUyw4Q0FBcUI7WUFDZixpQkFBVTtPQVJ6QixXQUFXLENBdUJ2QjtJQUFELGtCQUFDO0NBQUEsQUF2QkQsSUF1QkM7QUF2Qlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGhlbnRpY2F0aW9uL3NoYXJlZC9wcm92aWRlci9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERhdGFTZXJ2aWNlIHtcclxuXHJcbiAgICB1c2VyOiBhbnkgPSB7fVxyXG5cclxuICAgIGZpcmViYXNlRGJFbmRwb2ludDogc3RyaW5nID0gXCJodHRwczovL3RpbWUtdHJhY2tpbmctcHdhLmZpcmViYXNlaW8uY29tXCJcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGF1dGg6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGh0dHBDbGllbnQ6IEh0dHBDbGllbnRcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuYXV0aC51c2VyT2JzZXJ2YWJsZS5zdWJzY3JpYmUoKHVzZXIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodXNlcikpXHJcbiAgICAgICAgICAgIHRoaXMudXNlciA9IHVzZXI7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBnZXRDYXRlZ29yaWVzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0KHRoaXMuZmlyZWJhc2VEYkVuZHBvaW50ICsgXCIvY2F0ZWdvcmllcy5qc29uP2F1dGg9XCIgKyB0aGlzLnVzZXIuaWRUb2tlbilcclxuICAgIH1cclxuXHJcbiAgICBnZXRUYWdzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0KHRoaXMuZmlyZWJhc2VEYkVuZHBvaW50ICsgXCIvdGFncy5qc29uP2F1dGg9XCIrIHRoaXMudXNlci5pZFRva2VuKVxyXG4gICAgfVxyXG59Il19