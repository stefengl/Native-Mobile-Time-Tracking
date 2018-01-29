import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddEntryService } from '../../../add-entry/provider/add-entry.service';
import { DatePicker } from 'ui/date-picker';

@Component({
    selector: 'Select-Date',
    moduleId: module.id,
    templateUrl: './select-date.component.html'
})

export class SelectDateComponent implements OnInit {
    constructor(
        private router: Router,
        private addEntryService: AddEntryService
    ) { }

    ngOnInit() { }

    onPickerLoaded(args) {
        let picker = <DatePicker>args.object;
        this.addEntryService.setDate(picker.date);
    }

    onDateChanged(args) {
        let picker = <DatePicker>args.object;
        this.addEntryService.setDate(picker.date);
    }

    onNextTap() {
        this.router.navigate(["/tabs/time"])
    }
}