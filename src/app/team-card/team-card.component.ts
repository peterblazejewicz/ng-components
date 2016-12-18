import { Component, HostBinding, Input, OnChanges, OnInit, SimpleChanges, ElementRef } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss']
})
export class TeamCardComponent implements OnInit, OnChanges {
  @Input()
  team: any;
  users: any[];
  @HostBinding('class')
  cardClass = 'card team-card';
  // tslint:disable-next-line:max-line-length
  placeholder: string = 'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAeAAD/7gAOQWRvYmUAZMAAAAAB/9sAhAAQCwsLDAsQDAwQFw8NDxcbFBAQFBsfFxcXFxcfHhcaGhoaFx4eIyUnJSMeLy8zMy8vQEBAQEBAQEBAQEBAQEBAAREPDxETERUSEhUUERQRFBoUFhYUGiYaGhwaGiYwIx4eHh4jMCsuJycnLis1NTAwNTVAQD9AQEBAQEBAQEBAQED/wAARCAADAA4DASIAAhEBAxEB/8QAXAABAQEAAAAAAAAAAAAAAAAAAAIEAQEAAAAAAAAAAAAAAAAAAAACEAAAAwYHAQAAAAAAAAAAAAAAERMBAhIyYhQhkaEDIwUVNREBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A3dkr5e8tfpwuneJITOzIcmQpit037Bw4mnCVNOpAAQv/2Q==';

  constructor(private el: ElementRef) {}
  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['team']) {
      if(this.team.users) {
        let min = Math.min(3, this.team.users.length);
        let max = this.team.users.length;
        let rand = Math.floor(Math.random() * (max - min + 1)) + min;
        this.users = this.team.users.slice(0, rand);
      }
    }
  }

}
