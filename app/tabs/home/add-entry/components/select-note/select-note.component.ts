import { Component, OnInit } from '@angular/core';
import { AddEntryService } from '../../../add-entry/provider/add-entry.service';
import {TextField} from "ui/text-field";

@Component({
    selector: 'Select-Note',
    moduleId: module.id,
    templateUrl: './select-note.component.html'
})

export class SelectNoteComponent implements OnInit {
    constructor(private addEntry: AddEntryService) { }

    ngOnInit() { }

    onSaveTap() {
        console.log(JSON.stringify(this.addEntry.newEntry))
    }

    onTextChange(args){
        let textField = <TextField> args.object;
        this.addEntry.setNote(textField.text);
    }
}