"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var tabs_component_1 = require("./tabs.component");
var select_date_component_1 = require("./home/add-entry/components/select-date/select-date.component");
var select_category_component_1 = require("./home/add-entry/components/select-category/select-category.component");
var select_time_component_1 = require("./home/add-entry/components/select-time/select-time.component");
var select_tags_component_1 = require("./home/add-entry/components/select-tags/select-tags.component");
var select_note_component_1 = require("./home/add-entry/components/select-note/select-note.component");
var routes = [
    {
        path: "tabs", component: tabs_component_1.TabsComponent, children: [
            { path: "", component: select_date_component_1.SelectDateComponent },
            { path: "category", component: select_category_component_1.SelectCategoryComponent },
            { path: "time", component: select_time_component_1.SelectTimeComponent },
            { path: "tags", component: select_tags_component_1.SelectTagsComponent },
            { path: "note", component: select_note_component_1.SelectNoteComponent },
        ]
    }
];
var TabsRoutingModule = /** @class */ (function () {
    function TabsRoutingModule() {
    }
    TabsRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], TabsRoutingModule);
    return TabsRoutingModule;
}());
exports.TabsRoutingModule = TabsRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRhYnMtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsc0RBQXVFO0FBRXZFLG1EQUFpRDtBQUNqRCx1R0FBb0c7QUFDcEcsbUhBQWdIO0FBQ2hILHVHQUFvRztBQUNwRyx1R0FBb0c7QUFDcEcsdUdBQW9HO0FBR3BHLElBQU0sTUFBTSxHQUFXO0lBQ25CO1FBQ0ksSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRSxRQUFRLEVBQUU7WUFDOUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSwyQ0FBbUIsRUFBRTtZQUM1QyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLG1EQUF1QixFQUFFO1lBQ3hELEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsMkNBQW1CLEVBQUU7WUFDaEQsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSwyQ0FBbUIsRUFBRTtZQUNoRCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDJDQUFtQixFQUFFO1NBQ25EO0tBQ0o7Q0FDSixDQUFDO0FBTUY7SUFBQTtJQUFpQyxDQUFDO0lBQXJCLGlCQUFpQjtRQUo3QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGlCQUFpQixDQUFJO0lBQUQsd0JBQUM7Q0FBQSxBQUFsQyxJQUFrQztBQUFyQiw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IFRhYnNDb21wb25lbnQgfSBmcm9tIFwiLi90YWJzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2VsZWN0RGF0ZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUvYWRkLWVudHJ5L2NvbXBvbmVudHMvc2VsZWN0LWRhdGUvc2VsZWN0LWRhdGUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTZWxlY3RDYXRlZ29yeUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUvYWRkLWVudHJ5L2NvbXBvbmVudHMvc2VsZWN0LWNhdGVnb3J5L3NlbGVjdC1jYXRlZ29yeS5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNlbGVjdFRpbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lL2FkZC1lbnRyeS9jb21wb25lbnRzL3NlbGVjdC10aW1lL3NlbGVjdC10aW1lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2VsZWN0VGFnc0NvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUvYWRkLWVudHJ5L2NvbXBvbmVudHMvc2VsZWN0LXRhZ3Mvc2VsZWN0LXRhZ3MuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTZWxlY3ROb3RlQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS9hZGQtZW50cnkvY29tcG9uZW50cy9zZWxlY3Qtbm90ZS9zZWxlY3Qtbm90ZS5jb21wb25lbnRcIjtcblxuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7XG4gICAgICAgIHBhdGg6IFwidGFic1wiLCBjb21wb25lbnQ6IFRhYnNDb21wb25lbnQsIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogU2VsZWN0RGF0ZUNvbXBvbmVudCB9LFxuICAgICAgICAgICAgeyBwYXRoOiBcImNhdGVnb3J5XCIsIGNvbXBvbmVudDogU2VsZWN0Q2F0ZWdvcnlDb21wb25lbnQgfSxcbiAgICAgICAgICAgIHsgcGF0aDogXCJ0aW1lXCIsIGNvbXBvbmVudDogU2VsZWN0VGltZUNvbXBvbmVudCB9LFxuICAgICAgICAgICAgeyBwYXRoOiBcInRhZ3NcIiwgY29tcG9uZW50OiBTZWxlY3RUYWdzQ29tcG9uZW50IH0sXG4gICAgICAgICAgICB7IHBhdGg6IFwibm90ZVwiLCBjb21wb25lbnQ6IFNlbGVjdE5vdGVDb21wb25lbnQgfSxcbiAgICAgICAgXVxuICAgIH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBUYWJzUm91dGluZ01vZHVsZSB7IH1cbiJdfQ==