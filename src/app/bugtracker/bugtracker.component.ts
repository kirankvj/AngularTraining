import { Component } from '@angular/core';
import { IBug } from './models/IBug';
import { BugOperationsService} from './services/bugOperations.service';


@Component({
	selector: 'bugtracker',
	templateUrl: './bugtracker.component.html',
	styleUrls: ['./bugtracker.component.css']
})
export class BugtrackerComponent{

	bugs : Array<IBug> = [];

	constructor(private _bugOperationsService: BugOperationsService){

	}

	onCreateClick(bugName : string){
		this.bugs.push(this._bugOperationsService.createNew(bugName));
	}

	onBugClick(bug: IBug):void{
		this._bugOperationsService.toggle(bug);
	}
	
	onRemoveClosed() : void{
		for (var i = this.bugs.length - 1; i >= 0; i--) {
			if (this.bugs[i].isClosed) this.bugs.splice(i,1);
		}
	}

	getClosedCount() : number {
		let closedCount = 0;
		for (var i = this.bugs.length - 1; i >= 0; i--) {
			if(this.bugs[i].isClosed) closedCount++;
		}
		return closedCount;
	}
}