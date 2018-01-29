// MODULES
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { TabsRoutingModule } from "./tabs-routing.module";

// DECLARATIONS
import { HistoryComponent } from "./history/history.component";
import { HomeComponent } from "./home/home.component";
import { SettingsComponent } from "./settings/settings.component";
import { TabsComponent } from "./tabs.component";
import { SelectDateComponent } from "./home/add-entry/components/select-date/select-date.component";
import { SelectCategoryComponent } from "./home/add-entry/components/select-category/select-category.component";
import { SelectTimeComponent } from "./home/add-entry/components/select-time/select-time.component";
import { SelectTagsComponent } from "./home/add-entry/components/select-tags/select-tags.component";
import { SelectNoteComponent } from "./home/add-entry/components/select-note/select-note.component";

// PROVIDER
import { AddEntryService } from "./home/add-entry/provider/add-entry.service";
import { DataService } from "./shared/data.service";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        TabsRoutingModule,
        NativeScriptHttpClientModule
    ],
    declarations: [
        TabsComponent,
        HomeComponent,
        HistoryComponent,
        SettingsComponent,
        SelectDateComponent,
        SelectCategoryComponent,
        SelectTimeComponent,
        SelectTagsComponent,
        SelectNoteComponent
    ],
    providers:[
        AddEntryService,
        DataService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class TabsModule { }
