"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
// import { HeroDetailComponent } from './hero-detail.component';
var playlist_service_1 = require('./playlist.service');
var PlaylistsComponent = (function () {
    function PlaylistsComponent(router, playlistService) {
        this.router = router;
        this.playlistService = playlistService;
    }
    PlaylistsComponent.prototype.getPlaylists = function () {
        var _this = this;
        this.playlistService.getPlaylists().then(function (playlist) { return _this.playlists = playlist; });
    };
    // addHero() {
    //   this.addingHero = true;
    //   this.selectedHero = null;
    // }
    //
    // close(savedHero: Hero) {
    //   this.addingHero = false;
    //   if (savedHero) { this.getHeroes(); }
    // }
    //
    // deleteHero(hero: Hero, event: any) {
    //   event.stopPropagation();
    //   this.heroService
    //       .delete(hero)
    //       .then(res => {
    //         this.heroes = this.heroes.filter(h => h !== hero);
    //         if (this.selectedHero === hero) { this.selectedHero = null; }
    //       })
    //       .catch(error => this.error = error);
    // }
    PlaylistsComponent.prototype.ngOnInit = function () {
        this.getPlaylists();
    };
    PlaylistsComponent = __decorate([
        core_1.Component({
            selector: 'playlists',
            templateUrl: 'app/playlists.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.Router, playlist_service_1.PlaylistService])
    ], PlaylistsComponent);
    return PlaylistsComponent;
}());
exports.PlaylistsComponent = PlaylistsComponent;
//# sourceMappingURL=playlists.component.js.map