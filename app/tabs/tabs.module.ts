// MODULES
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { TabsRoutingModule } from "./tabs-routing.module";

// DECLARATIONS
import { HomeComponent } from "./home/home.component";
import { TabsComponent } from "./tabs.component";
import { HistoryComponent } from "./history/history.component";
import { SettingsComponent } from "./settings/settings.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        TabsRoutingModule
    ],
    declarations: [
        TabsComponent,
        HomeComponent,
        HistoryComponent,
        SettingsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class TabsModule { }
