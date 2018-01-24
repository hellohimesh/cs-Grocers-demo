import { Component, OnInit } from '@angular/core';
import { dataService } from '../data/data.service';
import { Project, Person ,groceryMock , setup} from '../data/model';

@Component({
  selector: 'app-label-printing',
  templateUrl: './label-printing.component.html',
  styleUrls: ['./label-printing.component.css']
})
export class LabelPrintingComponent implements OnInit {

setupdata : setup[];
  constructor(private dataService: dataService) { }

  ngOnInit() {
  	this.setupdata = this.dataService.getSetupdata();
  }

}
