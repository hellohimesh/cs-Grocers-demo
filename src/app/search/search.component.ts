import { Component, OnInit } from '@angular/core';
import { dataService } from '../data/data.service';
import { Project, Person ,groceryMock} from '../data/model';
import { ColumnSetting } from '../table-layout/layout.model';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  projectSettings: ColumnSetting[] = 
      [
          {
              primaryKey: 'name',
              header: 'Name'
          },
          {
              primaryKey: 'first_flight',
              header: 'First launch'
          },
          {
              primaryKey: 'cost',
              header: 'Cost'
          }
      ];
projects: Project[];
    people: Person[];
    grocery:groceryMock[];

    constructor(private dataService: dataService){}
    ngOnInit() {
        this.projects = this.dataService.getProjects();
        this.people =   this.dataService.getPersonnel();
        this.grocery = this.dataService.getGrocery();
        console.log(this.projects);
        console.log(this.people);
    }
}
