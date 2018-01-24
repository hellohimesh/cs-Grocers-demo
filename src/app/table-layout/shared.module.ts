
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatCellPipe } from './format-cell.pipe';
import { TableLayoutComponent } from './table-layout.component';
@NgModule({
    imports: [ CommonModule ],
    declarations: [ TableLayoutComponent, FormatCellPipe ],
    exports: [
        CommonModule, 
        TableLayoutComponent 
    ]
})
export class SharedModule { }
