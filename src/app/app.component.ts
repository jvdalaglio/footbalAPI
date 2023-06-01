import { Component } from '@angular/core';
import { ApiService } from './core/api.service';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
  title = 'footballAlbum';
}
