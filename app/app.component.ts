import { Component, OnInit } from "@angular/core";
import { DataService } from "./tabs/shared/data.service";


@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent {
    constructor(private data: DataService) { }
}

