import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Playlist } from './playlist';


@Injectable()
export class PlaylistService {
  private playlistsUrl = 'http://localhost:8080/api/playlists';  // URL to web api

  constructor(private http: Http) { }

  getPlaylists(): Promise<Playlist[]> {
    return this.http.get(this.playlistsUrl)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }

  // Create the playlist
  private post(playlist: Playlist): Promise<Playlist> {
    console.error(playlist);
    let headers = new Headers({
      'Content-Type': 'application/json'});

    return this.http
               .post(this.playlistsUrl, JSON.stringify(playlist), {headers: headers})
               .toPromise()
               .then(res => res.json().data)
               .catch(this.handleError);
  }

  // getHero(id: number) {
  //   return this.getHeroes()
  //              .then(heroes => heroes.find(hero => hero.id === id));
  // }
  //
  // save(hero: Hero): Promise<Hero>  {
  //   if (hero.id) {
  //     return this.put(hero);
  //   }
  //   return this.post(hero);
  // }
  //
  // // Add new Hero
  // private post(hero: Hero): Promise<Hero> {
  //   let headers = new Headers({
  //     'Content-Type': 'application/json'});
  //
  //   return this.http
  //              .post(this.heroesUrl, JSON.stringify(hero), {headers: headers})
  //              .toPromise()
  //              .then(res => res.json().data)
  //              .catch(this.handleError);
  // }
  //
  // // Update existing Hero
  // private put(hero: Hero) {
  //   let headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //
  //   let url = `${this.heroesUrl}/${hero.id}`;
  //
  //   return this.http
  //              .put(url, JSON.stringify(hero), {headers: headers})
  //              .toPromise()
  //              .then(() => hero)
  //              .catch(this.handleError);
  // }
  //
  // delete(hero: Hero) {
  //   let headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //
  //   let url = `${this.heroesUrl}/${hero.id}`;
  //
  //   return this.http
  //              .delete(url, headers)
  //              .toPromise()
  //              .catch(this.handleError);
  // }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
