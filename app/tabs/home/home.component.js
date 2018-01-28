"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.currentProgress = 0;
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.prototype.onNextTap = function () {
        this.currentProgress += 1;
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html"
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQU9sRDtJQUlJO1FBRkEsb0JBQWUsR0FBVyxDQUFDLENBQUM7SUFFYixDQUFDO0lBRWhCLGdDQUFRLEdBQVIsY0FBa0IsQ0FBQztJQUduQixpQ0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLGVBQWUsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQVhRLGFBQWE7UUFMekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1NBQ3ZDLENBQUM7O09BQ1csYUFBYSxDQVl6QjtJQUFELG9CQUFDO0NBQUEsQUFaRCxJQVlDO0FBWlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY3VycmVudFByb2dyZXNzOiBudW1iZXIgPSAwO1xuXG4gICAgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7fVxuXG5cbiAgICBvbk5leHRUYXAoKXtcbiAgICAgICAgdGhpcy5jdXJyZW50UHJvZ3Jlc3MgKz0gMTtcbiAgICB9XG59XG4iXX0=