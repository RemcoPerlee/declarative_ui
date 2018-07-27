import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Playlist } from './playlist';
// import { HeroDetailComponent } from './hero-detail.component';
import { PlaylistService } from './playlist.service';

@Component({
  selector: 'playlists',
  templateUrl: 'app/playlists.component.html',
  // styleUrls:  ['app/heroes.component.css'],
  // directives: [HeroDetailComponent]
})

export class PlaylistsComponent implements OnInit {
  playlists: Playlist[];
  // selectedHero: Hero;
  // addingHero = false;
  error: any;

  constructor(
      private router: Router,
      private playlistService: PlaylistService
    ) { }

  getPlaylists() {
    this.playlistService.getPlaylists().then(playlist => this.playlists = playlist);
  }

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

  ngOnInit() {
    this.getPlaylists();
  }

  // onSelect(hero: Hero) { this.selectedHero = hero; }

  // gotoDetail() {
  //   this.router.navigate(['/detail', this.selectedHero.id]);
  // }
}
