"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var add_entry_service_1 = require("../../../add-entry/provider/add-entry.service");
var SelectDateComponent = /** @class */ (function () {
    function SelectDateComponent(router, addEntryService) {
        this.router = router;
        this.addEntryService = addEntryService;
    }
    SelectDateComponent.prototype.ngOnInit = function () { };
    SelectDateComponent.prototype.onPickerLoaded = function (args) {
        var picker = args.object;
        this.addEntryService.setDate(picker.date);
    };
    SelectDateComponent.prototype.onDateChanged = function (args) {
        var picker = args.object;
        this.addEntryService.setDate(picker.date);
    };
    SelectDateComponent.prototype.onNextTap = function () {
        this.router.navigate(["/tabs/time"]);
    };
    SelectDateComponent = __decorate([
        core_1.Component({
            selector: 'Select-Date',
            moduleId: module.id,
            templateUrl: './select-date.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router,
            add_entry_service_1.AddEntryService])
    ], SelectDateComponent);
    return SelectDateComponent;
}());
exports.SelectDateComponent = SelectDateComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWRhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VsZWN0LWRhdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF5QztBQUN6QyxtRkFBZ0Y7QUFTaEY7SUFDSSw2QkFDWSxNQUFjLEVBQ2QsZUFBZ0M7UUFEaEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUN4QyxDQUFDO0lBRUwsc0NBQVEsR0FBUixjQUFhLENBQUM7SUFFZCw0Q0FBYyxHQUFkLFVBQWUsSUFBSTtRQUNmLElBQUksTUFBTSxHQUFlLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCwyQ0FBYSxHQUFiLFVBQWMsSUFBSTtRQUNkLElBQUksTUFBTSxHQUFlLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCx1Q0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFBO0lBQ3hDLENBQUM7SUFwQlEsbUJBQW1CO1FBTi9CLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsYUFBYTtZQUN2QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDhCQUE4QjtTQUM5QyxDQUFDO3lDQUlzQixlQUFNO1lBQ0csbUNBQWU7T0FIbkMsbUJBQW1CLENBcUIvQjtJQUFELDBCQUFDO0NBQUEsQUFyQkQsSUFxQkM7QUFyQlksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQWRkRW50cnlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vYWRkLWVudHJ5L3Byb3ZpZGVyL2FkZC1lbnRyeS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gJ3VpL2RhdGUtcGlja2VyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdTZWxlY3QtRGF0ZScsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NlbGVjdC1kYXRlLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNlbGVjdERhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcml2YXRlIGFkZEVudHJ5U2VydmljZTogQWRkRW50cnlTZXJ2aWNlXHJcbiAgICApIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCkgeyB9XHJcblxyXG4gICAgb25QaWNrZXJMb2FkZWQoYXJncykge1xyXG4gICAgICAgIGxldCBwaWNrZXIgPSA8RGF0ZVBpY2tlcj5hcmdzLm9iamVjdDtcclxuICAgICAgICB0aGlzLmFkZEVudHJ5U2VydmljZS5zZXREYXRlKHBpY2tlci5kYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRhdGVDaGFuZ2VkKGFyZ3MpIHtcclxuICAgICAgICBsZXQgcGlja2VyID0gPERhdGVQaWNrZXI+YXJncy5vYmplY3Q7XHJcbiAgICAgICAgdGhpcy5hZGRFbnRyeVNlcnZpY2Uuc2V0RGF0ZShwaWNrZXIuZGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25OZXh0VGFwKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi90YWJzL3RpbWVcIl0pXHJcbiAgICB9XHJcbn0iXX0=