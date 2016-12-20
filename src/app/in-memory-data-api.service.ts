import { TemplateAst } from '@angular/compiler';
import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataApiService implements InMemoryDbService {

  createDb() {
    let teams = require('../data/teams.json');
    let users = JSON.parse(JSON.stringify(teams[0].users));
    teams = [...teams, ...teams, ...teams];
    teams.sort(() => 0.5 - Math.random());
    teams.forEach(team => {
      team.users.sort(() => 0.5 - Math.random());
    });
    return {
      teams,
      users
    };
  }

}
