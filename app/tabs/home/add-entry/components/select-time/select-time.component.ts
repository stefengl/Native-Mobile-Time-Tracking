import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddEntryService } from '../../../add-entry/provider/add-entry.service';
import { TimePicker } from "ui/time-picker";

@Component({
    selector: 'Select-Time',
    moduleId: module.id,
    templateUrl: './select-time.component.html'
})

export class SelectTimeComponent implements OnInit {
    constructor(private router: Router, private addEntryService: AddEntryService) { }

    ngOnInit() { }

    onNextTap() {
        this.router.navigate(["/tabs/category"])
    }
    onTimeChanged(args) {
        let picker = <TimePicker>args.object;
        const time = picker.hour + picker.minute / 60;
        this.addEntryService.setTime(time);
    }

    onPickerLoaded() {

    }
}