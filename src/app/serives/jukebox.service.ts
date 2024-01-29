import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class JukeboxService {
  private readonly storageBucketUrl =
    'https://storage.googleapis.com/storage/v1/b/cousin-mike-jamboree'

  constructor(private http: HttpClient) {}

  getVideoLinks() {
    return this.http.get(`${this.storageBucketUrl}`).pipe(
      map((response: any) => {
        const items = response.items
        console.log(items)
        return items.map((item: any) => `${this.storageBucketUrl}/${item.name}`)
      })
    )
  }

  getVideo(videoId: String) {
    // return this.http.get(
    //   `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${process.env.YOUTUBE_API_KEY}&part=snippet`
    // );
  }
}
