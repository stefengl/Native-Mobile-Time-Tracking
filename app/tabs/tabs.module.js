"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// MODULES
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var tabs_routing_module_1 = require("./tabs-routing.module");
// DECLARATIONS
var history_component_1 = require("./history/history.component");
var home_component_1 = require("./home/home.component");
var settings_component_1 = require("./settings/settings.component");
var tabs_component_1 = require("./tabs.component");
var select_date_component_1 = require("./home/add-entry/components/select-date/select-date.component");
var select_category_component_1 = require("./home/add-entry/components/select-category/select-category.component");
var select_time_component_1 = require("./home/add-entry/components/select-time/select-time.component");
var select_tags_component_1 = require("./home/add-entry/components/select-tags/select-tags.component");
var select_note_component_1 = require("./home/add-entry/components/select-note/select-note.component");
// PROVIDER
var add_entry_service_1 = require("./home/add-entry/provider/add-entry.service");
var data_service_1 = require("./shared/data.service");
var http_client_1 = require("nativescript-angular/http-client");
var TabsModule = /** @class */ (function () {
    function TabsModule() {
    }
    TabsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                tabs_routing_module_1.TabsRoutingModule,
                http_client_1.NativeScriptHttpClientModule
            ],
            declarations: [
                tabs_component_1.TabsComponent,
                home_component_1.HomeComponent,
                history_component_1.HistoryComponent,
                settings_component_1.SettingsComponent,
                select_date_component_1.SelectDateComponent,
                select_category_component_1.SelectCategoryComponent,
                select_time_component_1.SelectTimeComponent,
                select_tags_component_1.SelectTagsComponent,
                select_note_component_1.SelectNoteComponent
            ],
            providers: [
                add_entry_service_1.AddEntryService,
                data_service_1.DataService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], TabsModule);
    return TabsModule;
}());
exports.TabsModule = TabsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLFVBQVU7QUFDVixzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBQ3ZFLDZEQUEwRDtBQUUxRCxlQUFlO0FBQ2YsaUVBQStEO0FBQy9ELHdEQUFzRDtBQUN0RCxvRUFBa0U7QUFDbEUsbURBQWlEO0FBQ2pELHVHQUFvRztBQUNwRyxtSEFBZ0g7QUFDaEgsdUdBQW9HO0FBQ3BHLHVHQUFvRztBQUNwRyx1R0FBb0c7QUFFcEcsV0FBVztBQUNYLGlGQUE4RTtBQUM5RSxzREFBb0Q7QUFDcEQsZ0VBQWdGO0FBMkJoRjtJQUFBO0lBQTBCLENBQUM7SUFBZCxVQUFVO1FBekJ0QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsaUNBQXdCO2dCQUN4Qix1Q0FBaUI7Z0JBQ2pCLDBDQUE0QjthQUMvQjtZQUNELFlBQVksRUFBRTtnQkFDViw4QkFBYTtnQkFDYiw4QkFBYTtnQkFDYixvQ0FBZ0I7Z0JBQ2hCLHNDQUFpQjtnQkFDakIsMkNBQW1CO2dCQUNuQixtREFBdUI7Z0JBQ3ZCLDJDQUFtQjtnQkFDbkIsMkNBQW1CO2dCQUNuQiwyQ0FBbUI7YUFDdEI7WUFDRCxTQUFTLEVBQUM7Z0JBQ04sbUNBQWU7Z0JBQ2YsMEJBQVc7YUFDZDtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csVUFBVSxDQUFJO0lBQUQsaUJBQUM7Q0FBQSxBQUEzQixJQUEyQjtBQUFkLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTU9EVUxFU1xuaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgVGFic1JvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi90YWJzLXJvdXRpbmcubW9kdWxlXCI7XG5cbi8vIERFQ0xBUkFUSU9OU1xuaW1wb3J0IHsgSGlzdG9yeUNvbXBvbmVudCB9IGZyb20gXCIuL2hpc3RvcnkvaGlzdG9yeS5jb21wb25lbnRcIjtcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lL2hvbWUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTZXR0aW5nc0NvbXBvbmVudCB9IGZyb20gXCIuL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVGFic0NvbXBvbmVudCB9IGZyb20gXCIuL3RhYnMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTZWxlY3REYXRlQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS9hZGQtZW50cnkvY29tcG9uZW50cy9zZWxlY3QtZGF0ZS9zZWxlY3QtZGF0ZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNlbGVjdENhdGVnb3J5Q29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS9hZGQtZW50cnkvY29tcG9uZW50cy9zZWxlY3QtY2F0ZWdvcnkvc2VsZWN0LWNhdGVnb3J5LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2VsZWN0VGltZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUvYWRkLWVudHJ5L2NvbXBvbmVudHMvc2VsZWN0LXRpbWUvc2VsZWN0LXRpbWUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTZWxlY3RUYWdzQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS9hZGQtZW50cnkvY29tcG9uZW50cy9zZWxlY3QtdGFncy9zZWxlY3QtdGFncy5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNlbGVjdE5vdGVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lL2FkZC1lbnRyeS9jb21wb25lbnRzL3NlbGVjdC1ub3RlL3NlbGVjdC1ub3RlLmNvbXBvbmVudFwiO1xuXG4vLyBQUk9WSURFUlxuaW1wb3J0IHsgQWRkRW50cnlTZXJ2aWNlIH0gZnJvbSBcIi4vaG9tZS9hZGQtZW50cnkvcHJvdmlkZXIvYWRkLWVudHJ5LnNlcnZpY2VcIjtcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSBcIi4vc2hhcmVkL2RhdGEuc2VydmljZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwLWNsaWVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICBUYWJzUm91dGluZ01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFRhYnNDb21wb25lbnQsXG4gICAgICAgIEhvbWVDb21wb25lbnQsXG4gICAgICAgIEhpc3RvcnlDb21wb25lbnQsXG4gICAgICAgIFNldHRpbmdzQ29tcG9uZW50LFxuICAgICAgICBTZWxlY3REYXRlQ29tcG9uZW50LFxuICAgICAgICBTZWxlY3RDYXRlZ29yeUNvbXBvbmVudCxcbiAgICAgICAgU2VsZWN0VGltZUNvbXBvbmVudCxcbiAgICAgICAgU2VsZWN0VGFnc0NvbXBvbmVudCxcbiAgICAgICAgU2VsZWN0Tm90ZUNvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOltcbiAgICAgICAgQWRkRW50cnlTZXJ2aWNlLFxuICAgICAgICBEYXRhU2VydmljZVxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBUYWJzTW9kdWxlIHsgfVxuIl19