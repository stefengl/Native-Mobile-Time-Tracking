import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListPicker } from "ui/list-picker";
import { AddEntryService } from '../../../add-entry/provider/add-entry.service';
import { DataService } from '../../../../shared/data.service';

@Component({
    selector: 'Select-Category',
    moduleId: module.id,
    templateUrl: './select-category.component.html'
})

export class SelectCategoryComponent implements OnInit {
    constructor(
        private router: Router,
        private data: DataService,
        private addEntry: AddEntryService) { }

    categories: string[] = []

    ngOnInit() {
        this.data.getCategories()
            .subscribe(
            (res : any) => this.categories = [...res],
            (err) => console.log(err))

    }

    onNextTap() {
        this.router.navigate(["/tabs/tags"])
    }

    selectedIndexChanged(args) {
        let picker = <ListPicker>args.object;
        this.addEntry.setCategory(this.categories[picker.selectedIndex])
    }
}