import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    currentProgress: number = 0;

    constructor(
        private router: Router
    ) { }

    ngOnInit(): void { 

        // TODO SUBSCRIPTION
    }

}
