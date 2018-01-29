"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var add_entry_service_1 = require("../../../add-entry/provider/add-entry.service");
var data_service_1 = require("../../../../shared/data.service");
var SelectCategoryComponent = /** @class */ (function () {
    function SelectCategoryComponent(router, data, addEntry) {
        this.router = router;
        this.data = data;
        this.addEntry = addEntry;
        this.categories = [];
    }
    SelectCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getCategories()
            .subscribe(function (res) { return _this.categories = res.slice(); }, function (err) { return console.log(err); });
    };
    SelectCategoryComponent.prototype.onNextTap = function () {
        this.router.navigate(["/tabs/tags"]);
    };
    SelectCategoryComponent.prototype.selectedIndexChanged = function (args) {
        var picker = args.object;
        this.addEntry.setCategory(this.categories[picker.selectedIndex]);
    };
    SelectCategoryComponent = __decorate([
        core_1.Component({
            selector: 'Select-Category',
            moduleId: module.id,
            templateUrl: './select-category.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router,
            data_service_1.DataService,
            add_entry_service_1.AddEntryService])
    ], SelectCategoryComponent);
    return SelectCategoryComponent;
}());
exports.SelectCategoryComponent = SelectCategoryComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWNhdGVnb3J5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlbGVjdC1jYXRlZ29yeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQXlDO0FBRXpDLG1GQUFnRjtBQUNoRixnRUFBOEQ7QUFROUQ7SUFDSSxpQ0FDWSxNQUFjLEVBQ2QsSUFBaUIsRUFDakIsUUFBeUI7UUFGekIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFNBQUksR0FBSixJQUFJLENBQWE7UUFDakIsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFFckMsZUFBVSxHQUFhLEVBQUUsQ0FBQTtJQUZnQixDQUFDO0lBSTFDLDBDQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO2FBQ3BCLFNBQVMsQ0FDVixVQUFDLEdBQVMsSUFBSyxPQUFBLEtBQUksQ0FBQyxVQUFVLEdBQU8sR0FBRyxRQUFDLEVBQTFCLENBQTBCLEVBQ3pDLFVBQUMsR0FBRyxJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFBO0lBRWxDLENBQUM7SUFFRCwyQ0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFBO0lBQ3hDLENBQUM7SUFFRCxzREFBb0IsR0FBcEIsVUFBcUIsSUFBSTtRQUNyQixJQUFJLE1BQU0sR0FBZSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUE7SUFDcEUsQ0FBQztJQXZCUSx1QkFBdUI7UUFObkMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxrQ0FBa0M7U0FDbEQsQ0FBQzt5Q0FJc0IsZUFBTTtZQUNSLDBCQUFXO1lBQ1AsbUNBQWU7T0FKNUIsdUJBQXVCLENBd0JuQztJQUFELDhCQUFDO0NBQUEsQUF4QkQsSUF3QkM7QUF4QlksMERBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTGlzdFBpY2tlciB9IGZyb20gXCJ1aS9saXN0LXBpY2tlclwiO1xyXG5pbXBvcnQgeyBBZGRFbnRyeVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9hZGQtZW50cnkvcHJvdmlkZXIvYWRkLWVudHJ5LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9kYXRhLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ1NlbGVjdC1DYXRlZ29yeScsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NlbGVjdC1jYXRlZ29yeS5jb21wb25lbnQuaHRtbCdcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RDYXRlZ29yeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIHByaXZhdGUgZGF0YTogRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBhZGRFbnRyeTogQWRkRW50cnlTZXJ2aWNlKSB7IH1cclxuXHJcbiAgICBjYXRlZ29yaWVzOiBzdHJpbmdbXSA9IFtdXHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhLmdldENhdGVnb3JpZXMoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAocmVzIDogYW55KSA9PiB0aGlzLmNhdGVnb3JpZXMgPSBbLi4ucmVzXSxcclxuICAgICAgICAgICAgKGVycikgPT4gY29uc29sZS5sb2coZXJyKSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25OZXh0VGFwKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi90YWJzL3RhZ3NcIl0pXHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0ZWRJbmRleENoYW5nZWQoYXJncykge1xyXG4gICAgICAgIGxldCBwaWNrZXIgPSA8TGlzdFBpY2tlcj5hcmdzLm9iamVjdDtcclxuICAgICAgICB0aGlzLmFkZEVudHJ5LnNldENhdGVnb3J5KHRoaXMuY2F0ZWdvcmllc1twaWNrZXIuc2VsZWN0ZWRJbmRleF0pXHJcbiAgICB9XHJcbn0iXX0=