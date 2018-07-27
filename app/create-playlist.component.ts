import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Playlist } from './playlist';
import { PlaylistService } from './playlist.service';

@Component({
  selector: 'create-playlist',
  templateUrl: 'app/create-playlist.component.html',
  styleUrls: ['app/create-playlist.component.css']
})

export class CreatePlaylistComponent implements OnInit, OnDestroy {
  // @Input() hero: Hero;
  playlist: Playlist;
  // @Output() close = new EventEmitter();
  error: any;
  sub: any;
  // navigated = false; // true if navigated here

  constructor(
    private playlistService: PlaylistService,
    private route: ActivatedRoute) {
  }

  create() {
    console.error(this.playlist);
    this.playlistService
          .post(this.playlist)
          .then(playlist => {
            this.playlist = playlist;
          })
          .catch(error => this.error = error); // TODO: Display error message
  }

  // save() {
  //   this.heroService
  //       .save(this.hero)
  //       .then(hero => {
  //         this.hero = hero; // saved hero, w/ id if new
  //         this.goBack(hero);
  //       })
  //       .catch(error => this.error = error); // TODO: Display error message
  // }

  ngOnInit() {
    this.playlist = new Playlist();
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
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }

  // goBack(savedHero: Hero = null) {
  //   this.close.emit(savedHero);
  //   if (this.navigated) { window.history.back(); }
  // }

}
