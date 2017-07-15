import {Component, Output, EventEmitter} from '@angular/core';
import {IBug} from '../models/IBug';
import {BugOperationsService} from '../services/bugOperations.service';


@Component({
	selector: 'bug-edit',
	template: `

	`
})
export class BugEditComponent{
	@Output()
	newBug : EventEmitter<IBug> = new EventEmitter<IBug>();

	constructor(private _bugOperationsService: BugOperationsService){

	}

	OnCreateClick(bugName : string): void {
		let newBugObj: IBug = this._bugOperationsService.createNew(bugName);
		this.newBug.emit(newBugObj);
	}
}

