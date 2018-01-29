"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var add_entry_service_1 = require("../../../add-entry/provider/add-entry.service");
var SelectTimeComponent = /** @class */ (function () {
    function SelectTimeComponent(router, addEntryService) {
        this.router = router;
        this.addEntryService = addEntryService;
    }
    SelectTimeComponent.prototype.ngOnInit = function () { };
    SelectTimeComponent.prototype.onNextTap = function () {
        this.router.navigate(["/tabs/category"]);
    };
    SelectTimeComponent.prototype.onTimeChanged = function (args) {
        var picker = args.object;
        var time = picker.hour + picker.minute / 60;
        this.addEntryService.setTime(time);
    };
    SelectTimeComponent.prototype.onPickerLoaded = function () {
    };
    SelectTimeComponent = __decorate([
        core_1.Component({
            selector: 'Select-Time',
            moduleId: module.id,
            templateUrl: './select-time.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router, add_entry_service_1.AddEntryService])
    ], SelectTimeComponent);
    return SelectTimeComponent;
}());
exports.SelectTimeComponent = SelectTimeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXRpbWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VsZWN0LXRpbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF5QztBQUN6QyxtRkFBZ0Y7QUFTaEY7SUFDSSw2QkFBb0IsTUFBYyxFQUFVLGVBQWdDO1FBQXhELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFBSSxDQUFDO0lBRWpGLHNDQUFRLEdBQVIsY0FBYSxDQUFDO0lBRWQsdUNBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFBO0lBQzVDLENBQUM7SUFDRCwyQ0FBYSxHQUFiLFVBQWMsSUFBSTtRQUNkLElBQUksTUFBTSxHQUFlLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckMsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUM5QyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsNENBQWMsR0FBZDtJQUVBLENBQUM7SUFoQlEsbUJBQW1CO1FBTi9CLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsYUFBYTtZQUN2QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDhCQUE4QjtTQUM5QyxDQUFDO3lDQUc4QixlQUFNLEVBQTJCLG1DQUFlO09BRG5FLG1CQUFtQixDQWlCL0I7SUFBRCwwQkFBQztDQUFBLEFBakJELElBaUJDO0FBakJZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEFkZEVudHJ5U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2FkZC1lbnRyeS9wcm92aWRlci9hZGQtZW50cnkuc2VydmljZSc7XHJcbmltcG9ydCB7IFRpbWVQaWNrZXIgfSBmcm9tIFwidWkvdGltZS1waWNrZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdTZWxlY3QtVGltZScsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NlbGVjdC10aW1lLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNlbGVjdFRpbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBhZGRFbnRyeVNlcnZpY2U6IEFkZEVudHJ5U2VydmljZSkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7IH1cclxuXHJcbiAgICBvbk5leHRUYXAoKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3RhYnMvY2F0ZWdvcnlcIl0pXHJcbiAgICB9XHJcbiAgICBvblRpbWVDaGFuZ2VkKGFyZ3MpIHtcclxuICAgICAgICBsZXQgcGlja2VyID0gPFRpbWVQaWNrZXI+YXJncy5vYmplY3Q7XHJcbiAgICAgICAgY29uc3QgdGltZSA9IHBpY2tlci5ob3VyICsgcGlja2VyLm1pbnV0ZSAvIDYwO1xyXG4gICAgICAgIHRoaXMuYWRkRW50cnlTZXJ2aWNlLnNldFRpbWUodGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25QaWNrZXJMb2FkZWQoKSB7XHJcblxyXG4gICAgfVxyXG59Il19