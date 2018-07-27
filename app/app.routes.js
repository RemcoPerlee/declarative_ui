"use strict";
var router_1 = require('@angular/router');
var playlists_component_1 = require('./playlists.component');
var create_playlist_component_1 = require('./create-playlist.component');
// import { HeroDetailComponent } from './hero-detail.component';
var routes = [
    {
        path: '',
        redirectTo: '/playlists',
        pathMatch: 'full'
    },
    {
        path: 'create-playlist',
        component: create_playlist_component_1.CreatePlaylistComponent
    },
    {
        path: 'playlists',
        component: playlists_component_1.PlaylistsComponent
    },
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map