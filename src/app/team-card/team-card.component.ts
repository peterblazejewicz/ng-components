import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss']
})
export class TeamCardComponent implements OnInit {
  @HostBinding('class')
  cardClass = 'card team-card';
  constructor() { }

  ngOnInit() {
  }

}
