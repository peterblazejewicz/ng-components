import { UserService } from '../user.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.scss']
})
export class TableUsersComponent implements OnInit {

  @Input('tableClass')
  set defaultTableClass(value: string){
    this.tableClass = value || this.tableClass;
  }
  @Input('theadClass')
  set defaultHeaderClass(value: string) {
    this.headerClass = value || this.headerClass;
  }

  tableClass: string = 'table';
  headerClass: string = '';
  users: any[];
  placeholder: string = 'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAeAAD/7gAOQWRvYmUAZMAAAAAB/9sAhAAQCwsLDAsQDAwQFw8NDxcbFBAQFBsfFxcXFxcfHhcaGhoaFx4eIyUnJSMeLy8zMy8vQEBAQEBAQEBAQEBAQEBAAREPDxETERUSEhUUERQRFBoUFhYUGiYaGhwaGiYwIx4eHh4jMCsuJycnLis1NTAwNTVAQD9AQEBAQEBAQEBAQED/wAARCAADAA4DASIAAhEBAxEB/8QAXAABAQEAAAAAAAAAAAAAAAAAAAIEAQEAAAAAAAAAAAAAAAAAAAACEAAAAwYHAQAAAAAAAAAAAAAAERMBAhIyYhQhkaEDIwUVNREBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A3dkr5e8tfpwuneJITOzIcmQpit037Bw4mnCVNOpAAQv/2Q==';

  constructor(private service: UserService) { }

  ngOnInit() {
    this.service
      .get()
      .subscribe((users: any[]) => {
        this.users = users;
      });
  }

}
