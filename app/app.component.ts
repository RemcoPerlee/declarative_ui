import { Component }         from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { PlaylistService } from './playlist.service';

@Component({
  selector: 'declarative-playlists',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['/playlists']"       routerLinkActive="active">List</a>
      <a [routerLink]="['/create-playlist']" routerLinkActive="active">Create</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  // styleUrls:  ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    PlaylistService
  ]
})

export class AppComponent {
  title = 'Declarative Playlists';
}
