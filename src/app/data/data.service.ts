import { Injectable } from '@angular/core';
import { Project, Person,groceryMock,setup } from './model';
import { PROJECTS, PERSONNEL ,grocery,setupData} from './fakedata';
@Injectable()
export class dataService {
    getProjects(): Project[] {
        // actual implementation would use async method
        return PROJECTS;
    }
    getPersonnel(): Person[] {
        return PERSONNEL;
    }
    getGrocery():groceryMock[]{
    	return grocery;
    }
    getSetupdata():setup[]{
    	return setupData;
    }
}