import { provideRouter, RouterConfig }  from '@angular/router';

import { PlaylistsComponent } from './playlists.component';
import { CreatePlaylistComponent } from './create-playlist.component';
// import { HeroDetailComponent } from './hero-detail.component';

const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/playlists',
    pathMatch: 'full'
  },
  {
    path: 'create-playlist',
    component: CreatePlaylistComponent
  },
  {
    path: 'playlists',
    component: PlaylistsComponent
  },
  // {
  //   path: 'detail/:id',
  //   component: HeroDetailComponent
  // }
];

export const appRouterProviders = [
  provideRouter(routes)
];
