"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_1 = require("platform");
var TabsComponent = (function () {
    function TabsComponent() {
        /* ***********************************************************
        * Use the constructor to inject app services that will be needed for
        * the whole tab navigation layout as a whole.
        *************************************************************/
    }
    TabsComponent.prototype.ngOnInit = function () {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for the whole tab
        * navigation layout as a whole.
        *************************************************************/
    };
    Object.defineProperty(TabsComponent.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (value) {
            if (this._title !== value) {
                this._title = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    /* ***********************************************************
    * The "getIconSource" function returns the correct tab icon source
    * depending on whether the app is ran on Android or iOS.
    * You can find all resources in /App_Resources/os
    *************************************************************/
    TabsComponent.prototype.getIconSource = function (icon) {
        return platform_1.isAndroid ? "" : "res://tabIcons/" + icon;
    };
    /* ***********************************************************
    * Get the current tab view title and set it as an ActionBar title.
    * Learn more about the onSelectedIndexChanged event here:
    * https://docs.nativescript.org/cookbook/ui/tab-view#using-selectedindexchanged-event-from-xml
    *************************************************************/
    TabsComponent.prototype.onSelectedIndexChanged = function (args) {
        var tabView = args.object;
        var selectedTabViewItem = tabView.items[args.newIndex];
        this.title = selectedTabViewItem.title;
    };
    TabsComponent = __decorate([
        core_1.Component({
            selector: "TabsComponent",
            moduleId: module.id,
            templateUrl: "./tabs.component.html",
            styleUrls: ["./tabs.component.scss"]
        }),
        __metadata("design:paramtypes", [])
    ], TabsComponent);
    return TabsComponent;
}());
exports.TabsComponent = TabsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxxQ0FBcUM7QUFTckM7SUFJSTtRQUNJOzs7c0VBRzhEO0lBQ2xFLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0k7OztzRUFHOEQ7SUFDbEUsQ0FBQztJQUVELHNCQUFJLGdDQUFLO2FBQVQ7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDO2FBRUQsVUFBVSxLQUFhO1lBQ25CLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDeEIsQ0FBQztRQUNMLENBQUM7OztPQU5BO0lBUUQ7Ozs7a0VBSThEO0lBQzlELHFDQUFhLEdBQWIsVUFBYyxJQUFZO1FBQ3RCLE1BQU0sQ0FBQyxvQkFBUyxHQUFHLEVBQUUsR0FBRyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7SUFDckQsQ0FBQztJQUVEOzs7O2tFQUk4RDtJQUM5RCw4Q0FBc0IsR0FBdEIsVUFBdUIsSUFBbUM7UUFDdEQsSUFBTSxPQUFPLEdBQVksSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQyxJQUFNLG1CQUFtQixHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXpELElBQUksQ0FBQyxLQUFLLEdBQUcsbUJBQW1CLENBQUMsS0FBSyxDQUFDO0lBQzNDLENBQUM7SUEvQ1EsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGVBQWU7WUFDekIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDdkMsQ0FBQzs7T0FDVyxhQUFhLENBZ0R6QjtJQUFELG9CQUFDO0NBQUEsQUFoREQsSUFnREM7QUFoRFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBpc0FuZHJvaWQgfSBmcm9tIFwicGxhdGZvcm1cIjtcbmltcG9ydCB7IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhLCBUYWJWaWV3LCBUYWJWaWV3SXRlbSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi12aWV3XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIlRhYnNDb21wb25lbnRcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vdGFicy5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi90YWJzLmNvbXBvbmVudC5zY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIFRhYnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgcHJpdmF0ZSBfdGl0bGU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICAqIFVzZSB0aGUgY29uc3RydWN0b3IgdG8gaW5qZWN0IGFwcCBzZXJ2aWNlcyB0aGF0IHdpbGwgYmUgbmVlZGVkIGZvclxuICAgICAgICAqIHRoZSB3aG9sZSB0YWIgbmF2aWdhdGlvbiBsYXlvdXQgYXMgYSB3aG9sZS5cbiAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgKiBVc2UgdGhlIFwibmdPbkluaXRcIiBoYW5kbGVyIHRvIGluaXRpYWxpemUgZGF0YSBmb3IgdGhlIHdob2xlIHRhYlxuICAgICAgICAqIG5hdmlnYXRpb24gbGF5b3V0IGFzIGEgd2hvbGUuXG4gICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgfVxuXG4gICAgZ2V0IHRpdGxlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgICB9XG5cbiAgICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5fdGl0bGUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAqIFRoZSBcImdldEljb25Tb3VyY2VcIiBmdW5jdGlvbiByZXR1cm5zIHRoZSBjb3JyZWN0IHRhYiBpY29uIHNvdXJjZVxuICAgICogZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlIGFwcCBpcyByYW4gb24gQW5kcm9pZCBvciBpT1MuXG4gICAgKiBZb3UgY2FuIGZpbmQgYWxsIHJlc291cmNlcyBpbiAvQXBwX1Jlc291cmNlcy9vc1xuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgZ2V0SWNvblNvdXJjZShpY29uOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gaXNBbmRyb2lkID8gXCJcIiA6IFwicmVzOi8vdGFiSWNvbnMvXCIgKyBpY29uO1xuICAgIH1cblxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgKiBHZXQgdGhlIGN1cnJlbnQgdGFiIHZpZXcgdGl0bGUgYW5kIHNldCBpdCBhcyBhbiBBY3Rpb25CYXIgdGl0bGUuXG4gICAgKiBMZWFybiBtb3JlIGFib3V0IHRoZSBvblNlbGVjdGVkSW5kZXhDaGFuZ2VkIGV2ZW50IGhlcmU6XG4gICAgKiBodHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9jb29rYm9vay91aS90YWItdmlldyN1c2luZy1zZWxlY3RlZGluZGV4Y2hhbmdlZC1ldmVudC1mcm9tLXhtbFxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgb25TZWxlY3RlZEluZGV4Q2hhbmdlZChhcmdzOiBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSkge1xuICAgICAgICBjb25zdCB0YWJWaWV3ID0gPFRhYlZpZXc+YXJncy5vYmplY3Q7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkVGFiVmlld0l0ZW0gPSB0YWJWaWV3Lml0ZW1zW2FyZ3MubmV3SW5kZXhdO1xuXG4gICAgICAgIHRoaXMudGl0bGUgPSBzZWxlY3RlZFRhYlZpZXdJdGVtLnRpdGxlO1xuICAgIH1cbn1cbiJdfQ==