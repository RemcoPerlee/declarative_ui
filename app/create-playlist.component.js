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
var playlist_1 = require('./playlist');
var playlist_service_1 = require('./playlist.service');
var CreatePlaylistComponent = (function () {
    // navigated = false; // true if navigated here
    function CreatePlaylistComponent(playlistService, route) {
        this.playlistService = playlistService;
        this.route = route;
    }
    CreatePlaylistComponent.prototype.create = function () {
        var _this = this;
        console.error(this.playlist);
        this.playlistService
            .post(this.playlist)
            .then(function (playlist) {
            _this.playlist = playlist;
        })
            .catch(function (error) { return _this.error = error; }); // TODO: Display error message
    };
    // save() {
    //   this.heroService
    //       .save(this.hero)
    //       .then(hero => {
    //         this.hero = hero; // saved hero, w/ id if new
    //         this.goBack(hero);
    //       })
    //       .catch(error => this.error = error); // TODO: Display error message
    // }
    CreatePlaylistComponent.prototype.ngOnInit = function () {
        this.playlist = new playlist_1.Playlist();
        // this.sub = this.route.params.subscribe(params => {
        //     if (params['id'] !== undefined) {
        //       let id = +params['id'];
        //       this.navigated = true;
        //       this.heroService.getHero(id)
        //           .then(hero => this.hero = hero);
        //     } else {
        //       this.navigated = false;
        //       this.hero = new Hero();
        //     }
        //   });
    };
    CreatePlaylistComponent.prototype.ngOnDestroy = function () {
        // this.sub.unsubscribe();
    };
    CreatePlaylistComponent = __decorate([
        core_1.Component({
            selector: 'create-playlist',
            templateUrl: 'app/create-playlist.component.html',
            styleUrls: ['app/create-playlist.component.css']
        }), 
        __metadata('design:paramtypes', [playlist_service_1.PlaylistService, router_1.ActivatedRoute])
    ], CreatePlaylistComponent);
    return CreatePlaylistComponent;
}());
exports.CreatePlaylistComponent = CreatePlaylistComponent;
//# sourceMappingURL=create-playlist.component.js.map