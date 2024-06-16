import { Component } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GoogleMap],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  options: google.maps.MapOptions = {
    mapId: 'DEMO_MAP_ID',
    center: { lat: -31, lng: 147 },
    zoom: 4,
  };
}
