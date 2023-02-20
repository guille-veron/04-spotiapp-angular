import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent{

  artista: any = {};
  loading :boolean;
  topTracks: any = [];
  constructor(private _router : ActivatedRoute,
              private _spoti: SpotifyService) {
    this.loading = true;
    this._router.params.subscribe(params => {
      this._spoti.getArtista(params['id'])
        .subscribe(data => {
          this.loading = false;
          this.artista = data;
        });
      this.getTopTraks(params['id']);      
    })
   }

   getTopTraks(id:string){
     this._spoti.getTopTracks(id)
      .subscribe(topTracks => {        
        this.topTracks = topTracks;
        console.log(topTracks);
      })
   }

  
}
