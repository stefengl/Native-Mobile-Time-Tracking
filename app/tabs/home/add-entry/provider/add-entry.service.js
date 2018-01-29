"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AddEntryService = /** @class */ (function () {
    function AddEntryService() {
        this.newEntry = { date: new Date() };
    }
    AddEntryService.prototype.setDate = function (value) {
        this.newEntry.date = value;
    };
    AddEntryService.prototype.setTime = function (value) {
        this.newEntry.time = value;
    };
    AddEntryService.prototype.setCategory = function (value) {
        this.newEntry.category = value;
    };
    AddEntryService.prototype.setTags = function (value) {
        this.newEntry.tags = value;
    };
    AddEntryService.prototype.setNote = function (value) {
        this.newEntry.note = value;
    };
    AddEntryService.prototype.saveEntry = function () {
    };
    AddEntryService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], AddEntryService);
    return AddEntryService;
}());
exports.AddEntryService = AddEntryService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWVudHJ5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhZGQtZW50cnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUczQztJQUlJO1FBRkEsYUFBUSxHQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFLEVBQUUsQ0FBQTtJQUVwQixDQUFDO0lBRWpCLGlDQUFPLEdBQVAsVUFBUSxLQUFLO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7SUFFRCxpQ0FBTyxHQUFQLFVBQVEsS0FBSztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBRUQscUNBQVcsR0FBWCxVQUFZLEtBQUs7UUFDYixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQztJQUVELGlDQUFPLEdBQVAsVUFBUSxLQUFLO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7SUFFRCxpQ0FBTyxHQUFQLFVBQVEsS0FBSztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBRUQsbUNBQVMsR0FBVDtJQUVBLENBQUM7SUE1QlEsZUFBZTtRQUQzQixpQkFBVSxFQUFFOztPQUNBLGVBQWUsQ0E4QjNCO0lBQUQsc0JBQUM7Q0FBQSxBQTlCRCxJQThCQztBQTlCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFkZEVudHJ5U2VydmljZSB7XHJcblxyXG4gICAgbmV3RW50cnk6IGFueSA9IHsgZGF0ZTogbmV3IERhdGUoKSB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICBzZXREYXRlKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5uZXdFbnRyeS5kYXRlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGltZSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMubmV3RW50cnkudGltZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENhdGVnb3J5KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5uZXdFbnRyeS5jYXRlZ29yeSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRhZ3ModmFsdWUpIHtcclxuICAgICAgICB0aGlzLm5ld0VudHJ5LnRhZ3MgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXROb3RlKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5uZXdFbnRyeS5ub3RlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZUVudHJ5KCkge1xyXG5cclxuICAgIH1cclxuXHJcbn0iXX0=