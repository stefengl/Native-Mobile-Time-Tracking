import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { TabsComponent } from "./tabs.component";
import { SelectDateComponent } from "./home/add-entry/components/select-date/select-date.component";
import { SelectCategoryComponent } from "./home/add-entry/components/select-category/select-category.component";
import { SelectTimeComponent } from "./home/add-entry/components/select-time/select-time.component";
import { SelectTagsComponent } from "./home/add-entry/components/select-tags/select-tags.component";
import { SelectNoteComponent } from "./home/add-entry/components/select-note/select-note.component";


const routes: Routes = [
    {
        path: "tabs", component: TabsComponent, children: [
            { path: "", component: SelectDateComponent },
            { path: "category", component: SelectCategoryComponent },
            { path: "time", component: SelectTimeComponent },
            { path: "tags", component: SelectTagsComponent },
            { path: "note", component: SelectNoteComponent },
        ]
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class TabsRoutingModule { }
