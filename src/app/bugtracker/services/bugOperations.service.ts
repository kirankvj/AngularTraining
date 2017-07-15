import {IBug} from '../models/IBug';

export class BugOperationsService{
	createNew(bugName): IBug{
		return {
			name: bugName,
			isClosed: false
		};
	}
	
	toggle(bug: IBug){
		bug.isClosed = !bug.isClosed;
	}
}