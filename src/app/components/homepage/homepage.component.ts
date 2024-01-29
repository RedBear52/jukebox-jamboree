import { Component } from '@angular/core'
import { JukeboxOverlayComponent } from '../jukebox-overlay/jukebox-overlay.component'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  providers: [JukeboxOverlayComponent],
})
export class HomepageComponent {
  constructor(private jukebox: JukeboxOverlayComponent) {}
}
