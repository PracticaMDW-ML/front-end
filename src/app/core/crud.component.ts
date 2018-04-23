import {Input, Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  templateUrl: 'crud.component.html',
  selector: 'app-crud'
})

export class CrudComponent {

  @Input() title = 'Management';
  @Input() columns: Array<String>;

  @Input() set data(data: any[]) {
    this.dataSource = new MatTableDataSource<any>(data);
  }

  dataSource: MatTableDataSource<any>;
}
