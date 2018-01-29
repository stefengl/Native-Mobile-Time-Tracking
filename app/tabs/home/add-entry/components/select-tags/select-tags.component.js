"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var add_entry_service_1 = require("../../../add-entry/provider/add-entry.service");
var data_service_1 = require("../../../../shared/data.service");
var SelectTagsComponent = /** @class */ (function () {
    function SelectTagsComponent(data, router, addEntry) {
        this.data = data;
        this.router = router;
        this.addEntry = addEntry;
        this.tags = [];
    }
    SelectTagsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getTags().subscribe(function (tags) { return _this.tags = tags.slice(); });
    };
    SelectTagsComponent.prototype.onNextTap = function () {
        this.router.navigate(["/tabs/note"]);
    };
    SelectTagsComponent.prototype.selectedIndexChanged = function (args) {
        var picker = args.object;
        this.addEntry.setTags(this.tags[picker.selectedIndex]);
    };
    SelectTagsComponent = __decorate([
        core_1.Component({
            selector: 'Select-Tags',
            moduleId: module.id,
            templateUrl: './select-tags.component.html'
        }),
        __metadata("design:paramtypes", [data_service_1.DataService,
            router_1.Router,
            add_entry_service_1.AddEntryService])
    ], SelectTagsComponent);
    return SelectTagsComponent;
}());
exports.SelectTagsComponent = SelectTagsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXRhZ3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VsZWN0LXRhZ3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF5QztBQUV6QyxtRkFBZ0Y7QUFDaEYsZ0VBQThEO0FBUTlEO0lBRUksNkJBQ1ksSUFBaUIsRUFDakIsTUFBYyxFQUNkLFFBQXlCO1FBRnpCLFNBQUksR0FBSixJQUFJLENBQWE7UUFDakIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBRXJDLFNBQUksR0FBYSxFQUFFLENBQUE7SUFGc0IsQ0FBQztJQUkxQyxzQ0FBUSxHQUFSO1FBQUEsaUJBRUM7UUFERyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQVMsSUFBSyxPQUFBLEtBQUksQ0FBQyxJQUFJLEdBQU8sSUFBSSxRQUFDLEVBQXJCLENBQXFCLENBQUMsQ0FBQTtJQUN2RSxDQUFDO0lBRUQsdUNBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQTtJQUN4QyxDQUFDO0lBRUQsa0RBQW9CLEdBQXBCLFVBQXFCLElBQUk7UUFDckIsSUFBSSxNQUFNLEdBQWUsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFBO0lBQzFELENBQUM7SUFwQlEsbUJBQW1CO1FBTi9CLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsYUFBYTtZQUN2QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDhCQUE4QjtTQUM5QyxDQUFDO3lDQUtvQiwwQkFBVztZQUNULGVBQU07WUFDSixtQ0FBZTtPQUw1QixtQkFBbUIsQ0FxQi9CO0lBQUQsMEJBQUM7Q0FBQSxBQXJCRCxJQXFCQztBQXJCWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBMaXN0UGlja2VyIH0gZnJvbSBcInVpL2xpc3QtcGlja2VyXCI7XHJcbmltcG9ydCB7IEFkZEVudHJ5U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2FkZC1lbnRyeS9wcm92aWRlci9hZGQtZW50cnkuc2VydmljZSc7XHJcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2RhdGEuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnU2VsZWN0LVRhZ3MnLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9zZWxlY3QtdGFncy5jb21wb25lbnQuaHRtbCdcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RUYWdzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGRhdGE6IERhdGFTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBhZGRFbnRyeTogQWRkRW50cnlTZXJ2aWNlKSB7IH1cclxuXHJcbiAgICB0YWdzOiBzdHJpbmdbXSA9IFtdXHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhLmdldFRhZ3MoKS5zdWJzY3JpYmUoKHRhZ3M6IGFueSkgPT4gdGhpcy50YWdzID0gWy4uLnRhZ3NdKVxyXG4gICAgfVxyXG5cclxuICAgIG9uTmV4dFRhcCgpIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvdGFicy9ub3RlXCJdKVxyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdGVkSW5kZXhDaGFuZ2VkKGFyZ3MpIHtcclxuICAgICAgICBsZXQgcGlja2VyID0gPExpc3RQaWNrZXI+YXJncy5vYmplY3Q7XHJcbiAgICAgICAgdGhpcy5hZGRFbnRyeS5zZXRUYWdzKHRoaXMudGFnc1twaWNrZXIuc2VsZWN0ZWRJbmRleF0pXHJcbiAgICB9XHJcbn0iXX0=