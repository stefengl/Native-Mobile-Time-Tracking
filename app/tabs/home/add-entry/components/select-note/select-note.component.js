"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var add_entry_service_1 = require("../../../add-entry/provider/add-entry.service");
var SelectNoteComponent = /** @class */ (function () {
    function SelectNoteComponent(addEntry) {
        this.addEntry = addEntry;
    }
    SelectNoteComponent.prototype.ngOnInit = function () { };
    SelectNoteComponent.prototype.onSaveTap = function () {
        console.log(JSON.stringify(this.addEntry.newEntry));
    };
    SelectNoteComponent.prototype.onTextChange = function (args) {
        var textField = args.object;
        this.addEntry.setNote(textField.text);
    };
    SelectNoteComponent = __decorate([
        core_1.Component({
            selector: 'Select-Note',
            moduleId: module.id,
            templateUrl: './select-note.component.html'
        }),
        __metadata("design:paramtypes", [add_entry_service_1.AddEntryService])
    ], SelectNoteComponent);
    return SelectNoteComponent;
}());
exports.SelectNoteComponent = SelectNoteComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LW5vdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VsZWN0LW5vdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELG1GQUFnRjtBQVNoRjtJQUNJLDZCQUFvQixRQUF5QjtRQUF6QixhQUFRLEdBQVIsUUFBUSxDQUFpQjtJQUFJLENBQUM7SUFFbEQsc0NBQVEsR0FBUixjQUFhLENBQUM7SUFFZCx1Q0FBUyxHQUFUO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtJQUN2RCxDQUFDO0lBRUQsMENBQVksR0FBWixVQUFhLElBQUk7UUFDYixJQUFJLFNBQVMsR0FBZSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBWlEsbUJBQW1CO1FBTi9CLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsYUFBYTtZQUN2QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDhCQUE4QjtTQUM5QyxDQUFDO3lDQUdnQyxtQ0FBZTtPQURwQyxtQkFBbUIsQ0FhL0I7SUFBRCwwQkFBQztDQUFBLEFBYkQsSUFhQztBQWJZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFkZEVudHJ5U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2FkZC1lbnRyeS9wcm92aWRlci9hZGQtZW50cnkuc2VydmljZSc7XHJcbmltcG9ydCB7VGV4dEZpZWxkfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ1NlbGVjdC1Ob3RlJyxcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vc2VsZWN0LW5vdGUuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU2VsZWN0Tm90ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFkZEVudHJ5OiBBZGRFbnRyeVNlcnZpY2UpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCkgeyB9XHJcblxyXG4gICAgb25TYXZlVGFwKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMuYWRkRW50cnkubmV3RW50cnkpKVxyXG4gICAgfVxyXG5cclxuICAgIG9uVGV4dENoYW5nZShhcmdzKXtcclxuICAgICAgICBsZXQgdGV4dEZpZWxkID0gPFRleHRGaWVsZD4gYXJncy5vYmplY3Q7XHJcbiAgICAgICAgdGhpcy5hZGRFbnRyeS5zZXROb3RlKHRleHRGaWVsZC50ZXh0KTtcclxuICAgIH1cclxufSJdfQ==