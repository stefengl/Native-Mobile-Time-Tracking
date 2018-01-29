import { Injectable } from '@angular/core';

@Injectable()
export class AddEntryService {

    newEntry: any = { date: new Date() }

    constructor() { }

    setDate(value) {
        this.newEntry.date = value;
    }

    setTime(value) {
        this.newEntry.time = value;
    }

    setCategory(value) {
        this.newEntry.category = value;
    }

    setTags(value) {
        this.newEntry.tags = value;
    }

    setNote(value) {
        this.newEntry.note = value;
    }

    saveEntry() {

    }

}