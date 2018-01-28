import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    currentProgress: number = 0;

    constructor() {}

    ngOnInit(): void {}


    onNextTap(){
        this.currentProgress += 1;
    }
}
