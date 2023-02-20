import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent{

  nuevasCanciones: any[] = [];
  loading :boolean;
  error :boolean;
  mensajeError :string = "";
  

  constructor(private _spoti: SpotifyService) {
    this.loading = true;
    this.error = false;
    _spoti.getNewReleases()
      .subscribe((data:any) => {
        console.log(data);
        this.error = false;
        this.nuevasCanciones = data;        
        this.loading = false;

      }, (errorServicio) =>{        
        this.loading = false;
        this.error = true;
        this.mensajeError = errorServicio.error.error.message;
        
      } )
  }
}
