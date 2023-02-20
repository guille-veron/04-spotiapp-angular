import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent{

  nuevasCanciones :any [] =[];
  loading :boolean=false;

  constructor(private _spoti:SpotifyService) { }
  
  buscar(termino:string){
    this.loading = true;
    this._spoti.getArtistas(termino)
      .subscribe((data:any) => {
        console.log(data);
        this.nuevasCanciones = data;
        this.loading = false;
      })
  }

}
