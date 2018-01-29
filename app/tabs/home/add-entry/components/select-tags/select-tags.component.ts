import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListPicker } from "ui/list-picker";
import { AddEntryService } from '../../../add-entry/provider/add-entry.service';
import { DataService } from '../../../../shared/data.service';

@Component({
    selector: 'Select-Tags',
    moduleId: module.id,
    templateUrl: './select-tags.component.html'
})

export class SelectTagsComponent implements OnInit {

    constructor(
        private data: DataService,
        private router: Router,
        private addEntry: AddEntryService) { }

    tags: string[] = []

    ngOnInit() {
        this.data.getTags().subscribe((tags: any) => this.tags = [...tags])
    }

    onNextTap() {
        this.router.navigate(["/tabs/note"])
    }

    selectedIndexChanged(args) {
        let picker = <ListPicker>args.object;
        this.addEntry.setTags(this.tags[picker.selectedIndex])
    }
}