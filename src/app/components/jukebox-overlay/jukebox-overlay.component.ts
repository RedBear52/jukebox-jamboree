import { Component } from '@angular/core'
import { JukeboxService } from '../../serives/jukebox.service'

@Component({
  selector: 'app-jukebox-overlay',
  templateUrl: './jukebox-overlay.component.html',
  styleUrls: ['./jukebox-overlay.component.scss'],
})
export class JukeboxOverlayComponent {
  videoLinks: String[] = []

  constructor(private jukeboxService: JukeboxService) {}

  playVideo(videoUrl: String) {
    const videoElement = document.getElementById(
      'video-ele'
    ) as HTMLVideoElement
    videoElement.src = `${videoUrl}`
    videoElement.play()
  }
}

