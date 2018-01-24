import { dataService } from '../data/data.service';
import { Project, Person ,groceryMock , setup} from '../data/model';
import { ColumnSetting } from '../table-layout/layout.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-up',
  templateUrl: './set-up.component.html',
  styleUrls: ['./set-up.component.css']
})
export class SetUpComponent implements OnInit {
setupdata : setup[];
  constructor(private dataService: dataService) { }

  ngOnInit() {
  	this.setupdata = this.dataService.getSetupdata();
  }

}
