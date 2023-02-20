import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private _http:HttpClient) {

    console.log('spotify service ready');
   }
   
   getQuery(query:string){
     const url = `https://api.spotify.com/v1/${ query }`;
     const headers = new HttpHeaders({
      'Authorization': 'Bearer BQA0tgIHSWijRVFjimK8WLI53fjUIp0h68D7laTS9Kg3fMDJ_jcPllAQXrCfbraqC__qGrmUkBQ_B1sCKT8'
    });
    return this._http.get(url,{ headers });

   }

   getNewReleases(){
     
      return this.getQuery('browse/new-releases').pipe(map((data:any) => data['albums'].items));
   }

   getArtistas(termino:string){
    
    return this.getQuery(`search?q=${ termino }&type=artist&limit=20`).pipe(map((data:any) => data.artists.items));
   
  }

  getArtista(id:string){
    
    return this.getQuery(`artists/${ id }`);    
   
  }

  getTopTracks(id:string){
    
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
      .pipe(map((data:any) => data['tracks']));
   
  }
}
