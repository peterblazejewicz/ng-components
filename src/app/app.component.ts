import { TeamService } from './team.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'cmpnt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cmpnt works!';
  teams: any[];

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    this.teamService
      .get()
      .subscribe((teams: any[]) => {
        this.teams = teams;
      })
  }
}
