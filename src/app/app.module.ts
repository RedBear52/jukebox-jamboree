import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MatCardModule } from '@angular/material/card' // <-- Here
import { MatButtonModule } from '@angular/material/button' // <-- Here
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomepageComponent } from './components/homepage/homepage.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { JukeboxOverlayComponent } from './components/jukebox-overlay/jukebox-overlay.component'
import { MatGridListModule } from '@angular/material/grid-list'

@NgModule({
  declarations: [AppComponent, HomepageComponent, JukeboxOverlayComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatGridListModule, // <-- Here
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
